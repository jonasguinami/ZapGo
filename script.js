// =================================================================================
// 1. DADOS DOS TEMPLATES (AGORA COM CAMPOS CONTEXTUAIS)
// =================================================================================

// =================================================================================
// 1. DADOS DOS TEMPLATES (VERSÃO COMPLETA COM 32 MODELOS)
// =================================================================================

const templatesData = {
  "Aniversário": [
    { 
      "id": "aniv_01", 
      "texto": "Feliz aniversário, [Nome]! 🎉 Que seu dia seja incrível e repleto de alegrias. Tudo de bom hoje e sempre!",
      "campos": [ { "key": "[Nome]", "label": "Nome do Aniversariante", "type": "text" } ]
    },
    { 
      "id": "aniv_02", 
      "texto": "Parabéns, [Nome]! 🎂 Muita saúde, paz, amor e sucesso neste novo ciclo que se inicia.",
      "campos": [ { "key": "[Nome]", "label": "Nome do Aniversariante", "type": "text" } ]
    },
    { 
      "id": "aniv_03", 
      "texto": "Feliz vida, [Nome]! ✨ Desejo que você celebre este dia com muita felicidade. Um grande abraço!",
      "campos": [ { "key": "[Nome]", "label": "Nome do Aniversariante", "type": "text" } ]
    },
    { 
      "id": "aniv_04", 
      "texto": "Para comemorar seu dia especial, [Nome], temos um presente para você: [Desconto/Presente]! Válido por toda a semana do seu aniversário. 🥳",
      "campos": [
        { "key": "[Nome]", "label": "Nome do Aniversariante", "type": "text" },
        { "key": "[Desconto/Presente]", "label": "Desconto ou Presente", "type": "text" }
      ]
    },
    { 
      "id": "aniv_05", 
      "texto": "Olá, [Nome]! Passando para te desejar um feliz e abençoado aniversário. Que a felicidade te encontre em cada momento do seu dia. Parabéns!",
      "campos": [ { "key": "[Nome]", "label": "Nome (Formal)", "type": "text" } ]
    },
    { 
      "id": "aniv_06", 
      "texto": "E aí, [Apelido]! Hoje o dia é todo seu! Muitas felicidades, sucesso e que todos os seus sonhos se realizem. Tamo junto!",
      "campos": [ { "key": "[Apelido]", "label": "Nome ou Apelido (Casual)", "type": "text" } ]
    },
    { 
      "id": "aniv_07", 
      "texto": "Em nome de toda a equipe [Nome da Empresa], desejamos a você, [Nome do Cliente], um feliz aniversário! Agradecemos pela sua parceria e confiança.",
      "campos": [
        { "key": "[Nome da Empresa]", "label": "Nome da Empresa", "type": "text" },
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente (VIP)", "type": "text" }
      ]
    },
    { 
      "id": "aniv_08", 
      "texto": "Que seu aniversário seja tão incrível quanto você, [Nome]! 🎉 Use o cupom [CUPOM] para um presente especial em nosso site. Aproveite seu dia!",
      "campos": [
        { "key": "[Nome]", "label": "Nome do Aniversariante", "type": "text" },
        { "key": "[CUPOM]", "label": "Código do Cupom", "type": "text" }
      ]
    }
  ],
  "Cobrança": [
    { 
      "id": "cobr_01", 
      "texto": "Olá, [Nome do Cliente]. Passando para lembrar sobre a fatura de [Produto/Serviço] no valor de R$[Valor], que venceu em [Data de Vencimento].",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Produto/Serviço]", "label": "Produto/Serviço", "type": "text" },
        { "key": "[Valor]", "label": "Valor", "type": "number" },
        { "key": "[Data de Vencimento]", "label": "Data de Vencimento", "type": "date" }
      ]
    },
    { 
      "id": "cobr_02", 
      "texto": "Olá, [Nome do Cliente]. Para facilitar, segue o código de barras para pagamento da sua fatura de [Produto/Serviço]:\n\n[Código de Barras]\n\nQualquer dúvida, é só chamar!",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Produto/Serviço]", "label": "Produto/Serviço", "type": "text" },
        { "key": "[Código de Barras]", "label": "Código de Barras", "type": "text" }
      ]
    },
    { 
      "id": "cobr_03", 
      "texto": "Oi, tudo joia? Verificamos que o pagamento referente à fatura [Fatura Nº] ainda está pendente. Se já realizou o pagamento, por favor, desconsidere. 😉", 
      "campos": [ { "key": "[Fatura Nº]", "label": "Número da Fatura", "type": "text" } ]
    },
    { 
      "id": "cobr_04", 
      "texto": "Oi, [Nome do Cliente]. Notei que seu pagamento para [Produto/Serviço] ainda não foi identificado. Aconteceu algum problema? Se precisar de ajuda ou de uma nova data, me avise! 👍", 
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Produto/Serviço]", "label": "Produto/Serviço", "type": "text" }
      ]
    },
    { 
      "id": "cobr_05", 
      "texto": "Prezado(a) [Nome do Cliente], este é um lembrete amigável de que sua fatura nº [Fatura Nº] está com [Nº Dias] dias de atraso. Para evitar juros, por favor, regularize sua situação através do link: [Link de Pagamento]",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Fatura Nº]", "label": "Número da Fatura", "type": "text" },
        { "key": "[Nº Dias]", "label": "Dias de Atraso", "type": "number" },
        { "key": "[Link de Pagamento]", "label": "Link de Pagamento", "type": "text" }
      ]
    },
    { 
      "id": "cobr_06", 
      "texto": "Olá, [Nome do Cliente]! Tudo bem? Estou entrando em contato para confirmar o recebimento da fatura referente a [Produto/Serviço]. O pagamento está agendado?",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Produto/Serviço]", "label": "Produto/Serviço", "type": "text" }
      ]
    },
    { 
      "id": "cobr_07", 
      "texto": "ÚLTIMO AVISO: Olá, [Nome do Cliente]. Sua fatura de [Produto/Serviço] continua em aberto. Para evitar a suspensão do serviço, por favor, efetue o pagamento em até 24h.",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Produto/Serviço]", "label": "Produto/Serviço", "type": "text" }
      ]
    },
    { 
      "id": "cobr_08", 
      "texto": "Oi, [Nome do Cliente]! Vi que sua fatura vence hoje. Quer que eu te envie o PIX Copia e Cola para facilitar o pagamento? 📲",
      "campos": [ { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" } ]
    }
  ],
  "Vendas": [
    { 
      "id": "vend_01", 
      "texto": "Oi, [Nome do Cliente]! 👋 Tenho uma oferta especial para você hoje: [Produto] com [Desconto]% de desconto. Válido só até amanhã! Confira: [Link da Oferta]",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Produto]", "label": "Produto em Oferta", "type": "text" },
        { "key": "[Desconto]", "label": "Desconto (%)", "type": "number" },
        { "key": "[Link da Oferta]", "label": "Link da Oferta", "type": "text" }
      ]
    },
    { 
      "id": "vend_02", 
      "texto": "Você viu nossa novidade? 🚀 O [Novo Produto] acabou de chegar e acho que você vai adorar. Espia aqui: [Link do Produto]", 
      "campos": [
        { "key": "[Novo Produto]", "label": "Nome do Novo Produto", "type": "text" },
        { "key": "[Link do Produto]", "label": "Link do Produto", "type": "text" }
      ]
    },
    { 
      "id": "vend_03", 
      "texto": "Notamos seu interesse em [Produto]. Restam poucas unidades! Garanta o seu agora antes que acabe.",
      "campos": [ { "key": "[Produto]", "label": "Produto", "type": "text" } ]
    },
    { 
      "id": "vend_04", 
      "texto": "Faz um tempo que você não aparece, [Nome do Cliente]! Sentimos sua falta. Que tal dar uma olhada nas nossas novidades com um cupom especial de reativação: [CUPOM] ✨", 
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[CUPOM]", "label": "Código do Cupom", "type": "text" }
      ]
    },
    { 
      "id": "vend_05", 
      "texto": "Olá, [Nome do Cliente]! Vi que você adicionou o [Produto] no carrinho mas não finalizou a compra. Aconteceu algo? Posso te ajudar a concluir?",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Produto]", "label": "Produto no Carrinho", "type": "text" }
      ]
    },
    { 
      "id": "vend_06", 
      "texto": "Oi, [Nome do Cliente]! Comprando [Produto 1], você leva o [Produto 2] pela metade do preço! Que tal aproveitar? 😉 A oferta acaba hoje!",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Produto 1]", "label": "Produto 1", "type": "text" },
        { "key": "[Produto 2]", "label": "Produto 2", "type": "text" }
      ]
    },
    { 
      "id": "vend_07", 
      "texto": "FRETE GRÁTIS! 🎉 Oi, [Nome do Cliente], só hoje todos os pedidos acima de R$[Valor Mínimo] têm frete por nossa conta. Aproveite!",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Valor Mínimo]", "label": "Valor Mínimo", "type": "number" }
      ]
    },
    { 
      "id": "vend_08", 
      "texto": "É um prazer ter você como cliente, [Nome do Cliente]! Para agradecer, liberamos um cupom de [Desconto]% exclusivo para sua próxima compra: [CUPOM]",
      "campos": [
        { "key": "[Nome do Cliente]", "label": "Nome do Cliente VIP", "type": "text" },
        { "key": "[Desconto]", "label": "Desconto (%)", "type": "number" },
        { "key": "[CUPOM]", "label": "Código do Cupom", "type": "text" }
      ]
    }
  ],
  "Marketing_Divulgação": [
    { 
      "id": "mkt_01", 
      "texto": "📢 NOVIDADE NA ÁREA! Chegou o que você estava esperando: [Nome da Novidade]. Saiba mais em nosso site: [Link]", 
      "campos": [
        { "key": "[Nome da Novidade]", "label": "Nome da Novidade", "type": "text" },
        { "key": "[Link]", "label": "Link de Divulgação", "type": "text" }
      ]
    },
    { 
      "id": "mkt_02", 
      "texto": "Ei, [Nome]! Quer ficar por dentro de todas as nossas promoções? Participe do nosso grupo VIP no WhatsApp: [Link do Grupo]", 
      "campos": [
        { "key": "[Nome]", "label": "Nome (opcional)", "type": "text" },
        { "key": "[Link do Grupo]", "label": "Link do Grupo", "type": "text" }
      ]
    },
    { 
      "id": "mkt_03", 
      "texto": "Semana do Consumidor! 🛍️ Descontos de até 50% em todo o site. Não perca tempo, a promoção é por tempo limitado!",
      "campos": []
    },
    { 
      "id": "mkt_04", 
      "texto": "Fique de olho! 👀 Na próxima semana teremos [Evento/Promoção]. Prepare-se para ofertas incríveis que anunciaremos primeiro!", 
      "campos": [ { "key": "[Evento/Promoção]", "label": "Evento ou Promoção", "type": "text" } ]
    },
    { 
      "id": "mkt_05", 
      "texto": "Sua opinião é muito importante! ✨ [Nome], você poderia nos dar um feedback sobre sua última experiência com [Produto/Serviço]? Leva só 1 minuto!",
      "campos": [
        { "key": "[Nome]", "label": "Nome do Cliente", "type": "text" },
        { "key": "[Produto/Serviço]", "label": "Produto/Serviço", "type": "text" }
      ]
    },
    { 
      "id": "mkt_06", 
      "texto": "Você sabia? 🤔 [Curiosidade sobre seu nicho]. Quer saber mais? Acompanhe nossos stories no Instagram: [Link do Instagram]",
      "campos": [
        { "key": "[Curiosidade sobre seu nicho]", "label": "Curiosidade/Dica Rápida", "type": "text" },
        { "key": "[Link do Instagram]", "label": "Link do Instagram", "type": "text" }
      ]
    },
    { 
      "id": "mkt_07", 
      "texto": "Estamos AO VIVO! 🔴 Participe da nossa live sobre [Tema da Live] e tire suas dúvidas em tempo real. Não fique de fora: [Link da Live]",
      "campos": [
        { "key": "[Tema da Live]", "label": "Tema da Live", "type": "text" },
        { "key": "[Link da Live]", "label": "Link da Live", "type": "text" }
      ]
    },
    { 
      "id": "mkt_08", 
      "texto": "SAVE THE DATE! 🗓️ No dia [Data do Evento], teremos um evento especial sobre [Nome do Evento]. Marque na sua agenda e confirme sua presença para receber um lembrete!",
      "campos": [
        { "key": "[Data do Evento]", "label": "Data do Evento", "type": "date" },
        { "key": "[Nome do Evento]", "label": "Nome do Evento", "type": "text" }
      ]
    }
  ]
};

// =================================================================================
// LÓGICA PRINCIPAL DA APLICAÇÃO
// =================================================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- SELEÇÃO DOS ELEMENTOS ---
    const phoneNumbersInput = document.getElementById('phoneNumbers');
    const messageTextArea = document.getElementById('messageText');
    const placeholderEditorContainer = document.getElementById('placeholder-editor-container');
    const scheduleDateInput = document.getElementById('scheduleDate');
    const scheduleTimeInput = document.getElementById('scheduleTime');
    const sendNowButton = document.getElementById('sendNowButton');
    const scheduleButton = document.getElementById('scheduleButton');
    const scheduleStatusContainer = document.getElementById('schedule-status');
    const sendQueueCard = document.getElementById('send-queue-card');
    const sendQueueContent = document.getElementById('send-queue-content');
    const categoryContainer = document.getElementById('category-container');
    const templatesContainer = document.getElementById('templates-container');
    const contactFileInput = document.getElementById('contactFile');
    const contactListContainer = document.getElementById('contact-list-container');
    const themeToggleButton = document.getElementById('theme-toggle');
    const sunIcon = themeToggleButton.querySelector('i[data-feather="sun"]');
    const moonIcon = themeToggleButton.querySelector('i[data-feather="moon"]');
    const copyMessageBtn = document.getElementById('copy-message-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');

    // --- VARIÁVEIS DE ESTADO ---
    let sendTimer = null;
    let countdownInterval = null;
    let currentTemplate = null;
    let bulkSendQueue = [];
    let currentBulkSendIndex = 0;

    // --- FUNÇÕES ---


    // --- FUNÇÕES DE UTILIDADE (Toast, Limpar, etc.) ---

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2500);
    }

    function clearAllFields() {
        if (confirm('Tem certeza que deseja limpar todos os campos?')) {
            phoneNumbersInput.value = '';
            messageTextArea.value = '';
            scheduleDateInput.value = '';
            scheduleTimeInput.value = '';
            placeholderEditorContainer.innerHTML = '';
            placeholderEditorContainer.style.display = 'none';
            currentTemplate = null;
        }
    }


    function renderPlaceholderEditor(template) {
        placeholderEditorContainer.innerHTML = '';
        const campos = template.campos;
        if (!campos || campos.length === 0) {
            placeholderEditorContainer.style.display = 'none';
            return;
        }
        placeholderEditorContainer.style.display = 'grid';
        campos.forEach(campo => {
            const group = document.createElement('div');
            group.className = 'placeholder-group';
            const label = document.createElement('label');
            label.htmlFor = `placeholder-input-${campo.key}`;
            label.textContent = campo.label;
            const input = document.createElement('input');
            input.type = campo.type || 'text';
            input.id = `placeholder-input-${campo.key}`;
            input.placeholder = campo.placeholder || '';
            input.dataset.placeholderKey = campo.key;
            group.appendChild(label);
            group.appendChild(input);
            placeholderEditorContainer.appendChild(group);
        });
    }

    function updateMessageFromPlaceholders() {
        if (!currentTemplate) return;
        let updatedMessage = currentTemplate.texto;
        const inputs = placeholderEditorContainer.querySelectorAll('input');
        inputs.forEach(input => {
            const placeholderKey = input.dataset.placeholderKey;
            const value = input.value;
            updatedMessage = updatedMessage.replaceAll(placeholderKey, value || placeholderKey);
        });
        messageTextArea.value = updatedMessage;
    }

    function loadCategories() {
        const categories = Object.keys(templatesData);
        categoryContainer.innerHTML = '';
        categories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category-item';
            categoryElement.textContent = category.replace(/_/g, ' ');
            categoryElement.dataset.category = category;
            categoryContainer.appendChild(categoryElement);
        });
    }

    function loadTemplates(category) {
        const templates = templatesData[category];
        templatesContainer.innerHTML = '';
        if (templates) {
            templates.forEach(template => {
                const templateElement = document.createElement('div');
                templateElement.className = 'template-item';
                templateElement.textContent = template.texto;
                templateElement.dataset.templateId = template.id;
                templateElement.dataset.category = category;
                templatesContainer.appendChild(templateElement);
            });
        }
    }

    function parseNumbers() { return phoneNumbersInput.value.split('\n').map(num => num.trim()).filter(num => num.length > 9); }
    function sendWhatsAppMessage(phone, message) { let cleanPhone = phone.replace(/\D/g, ''); if (cleanPhone && !cleanPhone.startsWith('55')) { cleanPhone = '55' + cleanPhone; } const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`; window.open(whatsappUrl, '_blank'); }
    
    function processNextInQueue() {
        const message = messageTextArea.value;
        if (currentBulkSendIndex >= bulkSendQueue.length) {
            sendQueueContent.innerHTML = `<div class="queue-complete"><h3>🎉 Envios finalizados!</h3><p>Todas as ${bulkSendQueue.length} mensagens foram preparadas.</p><button id="close-queue-btn" class="btn btn-secondary">Fechar</button></div>`;
            feather.replace();

    // --- LINHAS ADICIONADAS AQUI ---
    phoneNumbersInput.value = ''; // Limpa os números
    messageTextArea.value = '';   // Limpa a mensagem
    placeholderEditorContainer.style.display = 'none'; // Esconde o editor
    // -----------------------------

    return;
}
        const number = bulkSendQueue[currentBulkSendIndex];
        sendWhatsAppMessage(number, message);
        sendQueueContent.innerHTML = `<p class="card-subtitle">Passo ${currentBulkSendIndex + 1} de ${bulkSendQueue.length}</p><h3>Enviando para: <span class="queue-number-highlight">${number}</span></h3><p>Após enviar e fechar a aba, clique abaixo para continuar.</p><button id="next-in-queue-btn" class="btn">Já enviei, Próximo >></button><button id="close-queue-btn" class="btn btn-secondary" style="margin-top: 1rem;">Cancelar Disparos</button>`;
        feather.replace();
    }

    function startBulkSend() {
        currentBulkSendIndex = 0;
        processNextInQueue();
    }

    function showSendQueue(numbers) {
        bulkSendQueue = numbers;
        sendQueueCard.style.display = 'block';
        sendQueueContent.innerHTML = `<p class="card-subtitle">Você está prestes a iniciar um envio para <strong>${numbers.length} contatos</strong>.</p><p>Uma aba do WhatsApp será aberta para cada número, um de cada vez.</p><button id="start-bulk-send-btn" class="btn" style="margin-top: 1.5rem;"><i data-feather="play-circle" style="margin-right: 8px;"></i>Iniciar Envios</button><button id="close-queue-btn" class="btn btn-secondary" style="margin-top: 1rem;">Cancelar</button>`;
        feather.replace();
        sendQueueCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function updateStatusDisplay(message) { scheduleStatusContainer.innerHTML = message; scheduleStatusContainer.style.display = message ? 'block' : 'none'; }
    function cancelScheduledSend() { if (sendTimer) { clearTimeout(sendTimer); clearInterval(countdownInterval); sendTimer = null; countdownInterval = null; updateStatusDisplay('<p class="status-cancelled">Agendamento cancelado.</p>'); scheduleButton.style.display = 'block'; } }

    function displayContactList(numbers) {
        let message = messageTextArea.value || "Olá!";
        contactListContainer.innerHTML = `<h3>Clique em um número para abrir a conversa:</h3>`;
        const list = document.createElement('div');
        list.className = 'grid-container';
        numbers.forEach(num => {
            let cleanNum = num.replace(/\D/g, '');
            if (cleanNum && !cleanNum.startsWith('55')) { cleanNum = '55' + cleanNum; }
            const item = document.createElement('a');
            item.className = 'template-item';
            item.textContent = num;
            item.href = `https://wa.me/${cleanNum}?text=${encodeURIComponent(message)}`;
            item.target = '_blank';
            list.appendChild(item);
        });
        contactListContainer.appendChild(list);
    }
    
    // --- EVENT LISTENERS ---

    copyMessageBtn.addEventListener('click', () => {
        if (messageTextArea.value) {
            navigator.clipboard.writeText(messageTextArea.value)
                .then(() => {
                    showToast('Mensagem copiada com sucesso!');
                })
                .catch(err => {
                    showToast('Erro ao copiar a mensagem.');
                    console.error('Erro de cópia:', err);
                });
        }
    });

    clearAllBtn.addEventListener('click', clearAllFields);

    themeToggleButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        sunIcon.style.display = isDarkMode ? 'block' : 'none';
        moonIcon.style.display = isDarkMode ? 'none' : 'block';
        feather.replace();
    });

    placeholderEditorContainer.addEventListener('input', updateMessageFromPlaceholders);

    templatesContainer.addEventListener('click', (e) => {
        const templateItem = e.target.closest('.template-item');
        if (templateItem) {
            const category = templateItem.dataset.category;
            const templateId = templateItem.dataset.templateId;
            currentTemplate = templatesData[category].find(t => t.id === templateId);
            if (currentTemplate) {
                messageTextArea.value = currentTemplate.texto;
                renderPlaceholderEditor(currentTemplate);
                updateMessageFromPlaceholders();
                messageTextArea.focus();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });

    categoryContainer.addEventListener('click', (e) => {
        const categoryItem = e.target.closest('.category-item');
        if (categoryItem) {
            loadTemplates(categoryItem.dataset.category);
        }
    });
    
    sendNowButton.addEventListener('click', () => {
        const numbers = parseNumbers();
        const message = messageTextArea.value;
        if (numbers.length === 0 || !message) {
            alert('Preencha pelo menos um número e a mensagem para enviar.');
            return;
        }
        if (numbers.length === 1) {
            sendWhatsAppMessage(numbers[0], message);
        } else {
            showSendQueue(numbers);
        }
    });

    scheduleButton.addEventListener('click', () => {
        if (sendTimer) {
            alert('Um envio já está agendado. Cancele o anterior primeiro.');
            return;
        }
        const numbers = parseNumbers();
        const message = messageTextArea.value;
        const date = scheduleDateInput.value;
        const time = scheduleTimeInput.value;
        if (numbers.length === 0 || !message || !date || !time) {
            alert('Preencha os números, a mensagem, a data e a hora para agendar.');
            return;
        }
        const scheduledTime = new Date(`${date}T${time}`);
        const delay = scheduledTime.getTime() - new Date().getTime();
        if (delay <= 0) {
            alert('A data e hora do agendamento devem ser no futuro.');
            return;
        }
        sendTimer = setTimeout(() => {
            updateStatusDisplay('');
            if (numbers.length === 1) {
                sendWhatsAppMessage(numbers[0], message);
            } else {
                showSendQueue(numbers);
            }
            scheduleButton.style.display = 'block';
            sendTimer = null;
            clearInterval(countdownInterval);
        }, delay);
        scheduleButton.style.display = 'none';
        countdownInterval = setInterval(() => {
            const remaining = scheduledTime.getTime() - new Date().getTime();
            if (remaining <= 0) {
                clearInterval(countdownInterval);
                return;
            }
            const hours = Math.floor(remaining / 3600000);
            const minutes = Math.floor((remaining % 3600000) / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            const countdownText = `Enviando em ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            updateStatusDisplay(`<div class="status-active"><p><strong>Envio agendado!</strong> Não feche esta aba.</p><p class="countdown">${countdownText}</p><button id="cancelButton" class="btn btn-cancel">Cancelar</button></div>`);
        }, 1000);
    });
    
    scheduleStatusContainer.addEventListener('click', (e) => {
        if (e.target.id === 'cancelButton') { cancelScheduledSend(); }
    });

    sendQueueCard.addEventListener('click', e => {
        if (e.target.id === 'start-bulk-send-btn') { startBulkSend(); }
        if (e.target.id === 'next-in-queue-btn') { currentBulkSendIndex++; processNextInQueue(); }
        if (e.target.id === 'close-queue-btn') { sendQueueCard.style.display = 'none'; }
    });

    contactFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const numbers = e.target.result.split('\n').map(num => num.trim()).filter(num => num.length > 0);
            displayContactList(numbers);
        };
        reader.readAsText(file);
    });
    
    // --- INICIALIZAÇÃO DA PÁGINA ---
    if (templatesData && Object.keys(templatesData).length > 0) {
        loadCategories();
        loadTemplates(Object.keys(templatesData)[0]);
    } else {
        categoryContainer.innerHTML = "<p>Erro: Dados de templates não encontrados.</p>";
    }
});