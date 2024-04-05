const http = require('http');

// Criação do servidor http e da rota solicitada no enunciado
const server = http.createServer((req, res) => {
    if (req.url === '/executar_todas_tarefas' && req.method === 'GET') {
        try {
            res.writeHead(200, {'Content-Type': 'text/plain'});
        } catch (error) {
            res.end(`Erro`);
        }
    }
});

// Define a porta na qual o servidor irá escutar
const PORT = 1234;

// Inicia o servidor na porta definida
server.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
});

// Define a URL do endpoint
const endpoint_url = `http://localhost:${PORT}/engine/start`;

// Criação da classe Fila
class Fila {

    constructor() {
        this.elementos = [];
    }

    enfileirar(elemento) {
        this.elementos.push(elemento);
    }

    desenfileirar() {
        return this.elementos.shift();
    }

    estaVazia() {
        return this.elementos.length === 0;
    }
}

// Criação da classe do robo e definição de tarefas
class Robo {
    constructor() {
        this.tarefas = new Fila();
    }

    adicionarTarefa(tarefa) {
        this.tarefas.enfileirar(tarefa);
    }
    
    executarProximaTarefa() {
        return this.tarefas.desenfileirar();
    }

    executarTodasTarefas() {
        while (!this.tarefas.estaVazia()) {
            this.executarProximaTarefa();
        }
    }
}

// Exportação da classe do robo para testes unitários e de integração
module.exports = Robo;

// Encerra o servidor após a execução dos testes
afterAll(() => {
    server.close();
});
