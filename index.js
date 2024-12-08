// Mock de profissionais e suas disponibilidades
const profissionais = {
    cardiologista: [
        { nome: 'Dr. João', datas: ['10/12/2024', '12/12/2024', '15/12/2024'] },
        { nome: 'Dr. Lucas', datas: ['14/12/2024', '18/12/2024', '21/12/2024'] }
    ],
    ortopedista: [
        { nome: 'Dr. Maria', datas: ['05/12/2024', '08/12/2024', '11/12/2024'] },
        { nome: 'Dr. Paulo', datas: ['09/12/2024', '13/12/2024', '17/12/2024'] }
    ],
    dermatologista: [
        { nome: 'Dra. Ana', datas: ['02/12/2024', '06/12/2024', '10/12/2024'] },
        { nome: 'Dr. Carla', datas: ['12/12/2024', '16/12/2024', '20/12/2024'] }
    ],
    neurologista: [
        { nome: 'Dr. Roberto', datas: ['01/12/2024', '05/12/2024', '07/12/2024'] },
        { nome: 'Dra. Fernanda', datas: ['03/12/2024', '09/12/2024', '14/12/2024'] }
    ],
    ginecologista: [
        { nome: 'Dra. Luiza', datas: ['04/12/2024', '10/12/2024', '13/12/2024'] },
        { nome: 'Dr. Carlos', datas: ['06/12/2024', '12/12/2024', '19/12/2024'] }
    ],
    psiquiatra: [
        { nome: 'Dr. Eduardo', datas: ['02/12/2024', '08/12/2024', '15/12/2024'] },
        { nome: 'Dra. Júlia', datas: ['05/12/2024', '09/12/2024', '14/12/2024'] }
    ],
    pediatra: [
        { nome: 'Dra. Sofia', datas: ['07/12/2024', '11/12/2024', '20/12/2024'] },
        { nome: 'Dr. Bruno', datas: ['03/12/2024', '08/12/2024', '18/12/2024'] }
    ],
    endocrinologista: [
        { nome: 'Dr. Marcos', datas: ['01/12/2024', '10/12/2024', '15/12/2024'] },
        { nome: 'Dra. Beatriz', datas: ['04/12/2024', '12/12/2024', '17/12/2024'] }
    ]
};

// Referências dos elementos do DOM
const especialidadeSelect = document.getElementById('especialidade');
const profissionalSelect = document.getElementById('profissional');
const calendarContainer = document.getElementById('calendar');
const submitButton = document.querySelector('.btn-submit');

// Variáveis para armazenar seleções do usuário
let selectedProfissional = null;

// Preencher profissionais com base na especialidade escolhida
especialidadeSelect.addEventListener('change', () => {
    const especialidade = especialidadeSelect.value;

    if (especialidade) {
        profissionalSelect.innerHTML = '<option value="">Selecionar Profissional</option>';
        profissionais[especialidade].forEach(profissional => {
            const option = document.createElement('option');
            option.value = profissional.nome;
            option.textContent = profissional.nome;
            profissionalSelect.appendChild(option);
        });

        profissionalSelect.disabled = false;
        calendarContainer.innerHTML = ''; // Resetar o calendário
        submitButton.disabled = true;    // Desabilitar o botão "Agendar"
    } else {
        profissionalSelect.innerHTML = '<option value="">Selecionar Profissional</option>';
        profissionalSelect.disabled = true;
        calendarContainer.innerHTML = ''; // Resetar o calendário
        submitButton.disabled = true;    // Desabilitar o botão "Agendar"
    }
});

// Gerar o calendário com base no profissional escolhido
profissionalSelect.addEventListener('change', () => {
    const profissionalNome = profissionalSelect.value;

    if (profissionalNome) {
        const especialidade = especialidadeSelect.value;
        selectedProfissional = profissionais[especialidade].find(
            prof => prof.nome === profissionalNome
        );

        if (selectedProfissional) {
            renderCalendar(selectedProfissional.datas);
            submitButton.disabled = true; // Desabilitar o botão "Agendar"
        }
    } else {
        calendarContainer.innerHTML = ''; // Resetar o calendário
        submitButton.disabled = true;    // Desabilitar o botão "Agendar"
    }
});

// Renderizar o calendário de datas disponíveis
function renderCalendar(dates) {
    calendarContainer.innerHTML = ''; // Resetar o calendário

    dates.forEach(date => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = date;

        dayElement.addEventListener('click', () => {
            // Remover a seleção anterior
            document.querySelectorAll('.day').forEach(day => {
                day.classList.remove('selected');
            });

            // Adicionar a seleção ao dia clicado
            dayElement.classList.add('selected');
            submitButton.disabled = false; // Habilitar o botão "Agendar"
        });

        calendarContainer.appendChild(dayElement);
    });
}

// Submissão do formulário
document.getElementById('agendamento-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const especialidade = especialidadeSelect.value;
    const profissional = profissionalSelect.value;
    const selectedDate = document.querySelector('.day.selected')?.textContent;

    if (especialidade && profissional && selectedDate) {
        alert(`Agendamento confirmado:\nEspecialidade: ${especialidade}\nProfissional: ${profissional}\nData: ${selectedDate}`);
        // Aqui seria enviado para o backend ou banco de dados
    } else {
        alert('Por favor, preencha todas as informações para agendar.');
    }
});
