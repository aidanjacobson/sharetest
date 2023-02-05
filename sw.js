self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    event.respondWith((async () => {
        const formData = await event.request.formData();
        const link = formData.get('link') || '';
        const responseUrl = await saveBookmark(link);
        return Response.redirect("https://aidanjacobson.github.io/sharetest/recieve.html#file_recieved", 303);
    })());
  });
  