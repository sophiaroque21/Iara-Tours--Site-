
document.addEventListener('DOMContentLoaded', () => {
    
    // INTERAÇÃO 1: Envio do Formulário de Orçamento
    const formulario = document.getElementById('meuFormulario');
    
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // Impede o comportamento padrão de recarregar a página
            event.preventDefault(); 
            
            // Captura o nome digitado no primeiro campo de texto
            const nomeCliente = this.querySelector('input[type="text"]').value;
            
            // Exibe o alerta de sucesso personalizado
            alert(`Obrigado, ${nomeCliente}! Seu pedido de roteiro personalizado foi enviado com sucesso. Nossa equipe entrará em contato em breve!`);
            
            // Limpa todos os campos do formulário para o próximo uso
            this.reset();
        });
    }

    
    // INTERAÇÃO 2: Botão "Detalhes" dos Cards de Viagem
   
    const botoesDetalhes = document.querySelectorAll('.btn-card');

    botoesDetalhes.forEach(botao => {
        botao.addEventListener('click', function(event) {
            // Evita que o link '#' role a página para o topo involuntariamente
            event.preventDefault(); 
            
            // Encontra o card de viagem mais próximo para descobrir o destino clicado
            const cardPai = this.closest('.travel-card');
            const nomeDestino = cardPai.querySelector('h3').textContent;
            
            // Exibe uma resposta interativa na tela
            alert(`Você clicou em "Detalhes" para o destino: ${nomeDestino}. Em breve, mais informações estarão disponíveis!`);
        
        });
    });
});