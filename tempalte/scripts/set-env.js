const fs = require('fs');
const path = require('path');

const env = process.argv[2]; // ex: 'dev'

if (!env) {
  console.error('❌ 환경명을 지정해주세요 (ex: dev, qa, real)');
  process.exit(1);
}

const baseFile = path.resolve(__dirname, '../env/.env'); // 공통
const envFile = path.resolve(__dirname, `../env/.env.${env}`);
const destFile = path.resolve(__dirname, '../.env');

if (!fs.existsSync(envFile)) {
  console.error(`❌ ${envFile} 파일이 존재하지 않습니다.`);
  process.exit(1);
}

let merged = '';
if (fs.existsSync(baseFile)) {
  merged += fs.readFileSync(baseFile, 'utf-8') + '\n';
}
merged += fs.readFileSync(envFile, 'utf-8');

fs.writeFileSync(destFile, merged);
console.log(`✅ .env 파일을 .env.${env} (공통 + 환경별)로 설정했습니다.`);
