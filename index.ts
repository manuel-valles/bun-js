const server = Bun.serve({
    port: Bun.env.PORT || 3000,
    fetch(req){
        const url = new URL(req.url);
        if(url.pathname === '/') return new Response('Homepage!')
        if(url.pathname === '/about') return new Response('About page!')
        return new Response('Not found!', { status: 404 })
    },
})

console.log(`Server running at ${server.port}`)