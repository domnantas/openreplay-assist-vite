import './style.css'
import OpenReplay from '@openreplay/tracker';
import trackerAssist from '@openreplay/tracker-assist';

export const tracker = new OpenReplay({
	projectKey: '',
	__DISABLE_SECURE_MODE: true,
});

tracker.use(trackerAssist());



document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
