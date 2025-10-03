#!/usr/bin/env node
/**
 * Lesson style checker for Wwise course markdown files.
 * Run: `npm run lint:lessons`
 */
import { readdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import url from 'url';

const __dirname = dirname(url.fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'docs', 'notes', 'Wwise', '3.入門課程');

const requiredFrontmatterKeys = ['title','icon','createTime','permalink','order'];
let hasError = false;

function logError(msg){
  console.error(`❌ ${msg}`);
  hasError = true;
}
function logWarn(msg){
  console.warn(`⚠️  ${msg}`);
}

function getLessonFiles(){
  const all = readdirSync(ROOT).filter(f => f.endsWith('.md'));
  // 過濾非課程主體（如果未來有 README 可忽略）
  return all.sort((a,b)=>a.localeCompare(b,'zh-Hans-TW',{numeric:true}));
}

function extractFrontmatter(content){
  if(!content.startsWith('---')) return { front: null, body: content };
  const end = content.indexOf('\n---', 3);
  if(end === -1) return { front: null, body: content };
  const raw = content.slice(3, end).trim();
  const body = content.slice(end + 4);
  const lines = raw.split(/\r?\n/);
  const map = {};
  for(const line of lines){
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if(m){
      const k = m[1];
      if(map[k]) logError(`Frontmatter duplicate key: ${k}`);
      map[k] = m[2];
    }
  }
  return { front: map, body };
}

function checkFile(file, isLast){
  const full = join(ROOT, file);
  const raw = readFileSync(full,'utf-8');
  const { front, body } = extractFrontmatter(raw);

  if(!front){
    logError(`[${file}] Missing frontmatter block`);
    return;
  }

  // Required keys
  requiredFrontmatterKeys.forEach(k=>{
    if(!(k in front)) logError(`[${file}] Missing frontmatter key: ${k}`);
  });

  // Permalink pattern
  if(front.permalink && !/^\/Wwise\/course\/.+\/$/.test(front.permalink)){
    logError(`[${file}] Bad permalink format: ${front.permalink}`);
  }

  // tip block
  if(!body.includes('::: tip')){
    logError(`[${file}] Missing '::: tip' block`);
  }

  // learning outcomes
  if(!/##\s+🎯\s*本節你會收穫/.test(body)){
    logError(`[${file}] Missing learning outcomes section (## 🎯 本節你會收穫)`);
  }

  // checklist
  const hasChecklist = /##[^\n]*✅|檢查清單|品質檢查清單/.test(body);
  if(!hasChecklist){
    logError(`[${file}] Missing checklist section`);
  }

  // next teaser rules
  const hasNext = /下節預告/.test(body);
  if(isLast && hasNext){
    logError(`[${file}] Last file should NOT contain 下節預告`);
  } else if(!isLast && !hasNext){
    logError(`[${file}] Missing 下節預告 section`);
  }

  // ending congratulations
  if(!/恭喜！/.test(body)){
    logWarn(`[${file}] No ending '恭喜！' found (recommended)`);
  }

  // frontmatter duplicates (rudimentary second marker detection)
  const remainder = body.trimStart();
  if(remainder.startsWith('---')){
    logError(`[${file}] Multiple frontmatter blocks detected`);
  }
}

const files = getLessonFiles();
if(!files.length){
  console.log('No lesson markdown files found.');
  process.exit(0);
}

const last = files.at(-1);
files.forEach(f => checkFile(f, f === last));

if(hasError){
  console.error('\n❌ Lesson style check failed.');
  process.exit(1);
}
console.log('✅ All lesson files passed style checks.');
