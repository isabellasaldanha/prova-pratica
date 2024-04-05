const Robo = require('../src/app');

// Testes unitários e de integração

test('Adiciona uma tarefa para o robo', () => {
    const robo = new Robo();
    robo.adicionarTarefa('Limpar');
    expect(robo.executarProximaTarefa()).toEqual('Limpar');
});

test('Executa todas as tarefas do robo', () => {
    const robo = new Robo();
    robo.adicionarTarefa('Varrer');
    expect(robo.executarTodasTarefas());
});
