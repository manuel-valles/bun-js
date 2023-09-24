const server = Bun.serve({
    port: Bun.env.PORT || 3000,
    fetch(req){
        return new Response('Hello Bun!')
    }
})

console.log(`Server running at ${server.port}`)