const readline = require('readline');
const { execSync } = require('child_process');

const envs = ['dev', 'qa', 'real'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\n🌟 실행 환경을 선택하세요:');
envs.forEach((env, i) => {
  console.log(`${i + 1}) ${env}`);
});

rl.question('\n번호를 선택하세요: ', envAnswer => {
  const envIndex = parseInt(envAnswer, 10) - 1;
  const env = envs[envIndex];

  if (!env) {
    console.log('❌ 올바른 환경 번호를 입력해주세요.');
    rl.close();
    return;
  }

  const command = `yarn start:${env}`;
  console.log(`\n🚀 실행 중: ${command}\n`);
  execSync(command, { stdio: 'inherit' });
  rl.close();
});
