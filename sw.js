self.addEventListener('install',e=>{e.waitUntil(caches.open('lr1').then(c=>c.addAll(['./','index.html','config.js'])).catch(()=>{}))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open('lr1').then(c=>c.put(e.request,k)).catch(()=>{});return r}).catch(()=>caches.match(e.request)))});
