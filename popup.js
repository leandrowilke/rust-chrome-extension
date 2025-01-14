import init, { greet } from './rust_chrome_extension.js';

async function run() {
  try {
    await init();
    
    document.getElementById('greet').addEventListener('click', () => {
      const name = document.getElementById('name').value || 'World';
      const result = greet(name);
      document.getElementById('output').textContent = result;
    });
  } catch (error) {
    console.error('Failed to initialize:', error);
    document.getElementById('output').textContent = 'Error: Failed to initialize extension';
  }
}

run();