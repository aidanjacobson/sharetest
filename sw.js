self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    event.respondWith((async () => {
        const formData = await event.request.formData();
        const file = formData.get('files');
        return Response.redirect("https://aidanjacobson.github.io/sharetest/recieve.html#file_recieved", 303);
    })());
  });
  