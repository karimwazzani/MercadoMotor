const https = require('https');

const token = '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';
const repoName = 'MercadoMotor';

const data = JSON.stringify({
  name: repoName,
  private: true,
  description: 'Plataforma MercadoMotor - Rebranding Completo'
});

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/user/repos',
  method: 'POST',
  headers: {
    'Authorization': `token ${token}`,
    'User-Agent': 'NodeJS-Script',
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (d) => body += d);
  res.on('end', () => {
    try {
      const response = JSON.parse(body);
      if (res.statusCode === 201) {
        console.log(`SUCCESS: Repository created at ${response.clone_url}`);
        console.log(`OWNER:${response.owner.login}`);
      } else {
        console.error(`ERROR: ${response.message}`);
      }
    } catch (e) {
      console.error("Failed to parse response:", body);
    }
  });
});

req.on('error', (e) => console.error(e));
req.write(data);
req.end();
