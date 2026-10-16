// Ativa o modo estrito do JavaScript para ajudar a evitar erros comuns.
'use strict'

// Cria e exibe o conteúdo da página inicial.
function homepage() {
    // Busca na página o elemento principal identificado pelo id "root".
    const root = document.getElementById('root')

    // Define a classe CSS que estiliza a página inicial.
    root.className = 'homepage'

    // Cria um elemento de título de nível 1.
    const titulo = document.createElement('h1')

    // Define o texto que será exibido no título.
    titulo.textContent = 'FATEC - São Roque'

    // Cria um elemento de título de nível 2.
    const subtitulo = document.createElement('h2')

    // Define o texto que será exibido no subtítulo.
    subtitulo.textContent = 'Curso de Análise e Desenvolvimento de Sistemas'

    // Adiciona o título dentro do elemento principal da página.
    const texto = document.createElement('p')
    texto.textContent = 'A FATEC São Roque é uma instituição de ensino superior que oferece cursos de graduação tecnológica, incluindo o curso de Análise e Desenvolvimento de Sistemas. Seu objetivo é formar profissionais capacitados para atuar no mercado de tecnologia da informação, promovendo a inovação e o desenvolvimento de soluções tecnológicas.'

    // Exibe os títulos e o parágrafo na área principal.
    root.replaceChildren(titulo, subtitulo, texto)
}

// Cria e exibe o texto institucional na página sobre.
function sobrePage() {
    // Busca na página o elemento principal identificado pelo id "root".
    const root = document.getElementById('root')
    root.className = 'sobre'

    // Cria o título e os parágrafos da página.
    const titulo = document.createElement('h1')
    titulo.textContent = 'Sobre a FATEC'

    const primeiroParagrafo = document.createElement('p')
    primeiroParagrafo.textContent = 'A Faculdade de Tecnologia (FATEC) São Roque faz parte da rede de ensino superior tecnológico do Centro Paula Souza, instituição pública do Governo do Estado de São Paulo. As FATECs oferecem cursos superiores voltados à tecnologia e à formação de profissionais preparados para acompanhar as necessidades do mercado de trabalho.'

    const segundoParagrafo = document.createElement('p')
    segundoParagrafo.textContent = 'Com uma formação que une conhecimentos teóricos e práticos, a FATEC contribui para o desenvolvimento profissional dos estudantes e para o crescimento da região. A unidade de São Roque atende pessoas que buscam ampliar seus conhecimentos e construir uma carreira.'

    // Insere o conteúdo criado pelo JavaScript na página.
    root.replaceChildren(titulo, primeiroParagrafo, segundoParagrafo)
}

// Cria e exibe a lista de cursos na página de cursos.
function cursosPage() {
    const root = document.getElementById('root')
    root.className = 'cursos'

    const titulo = document.createElement('h1') // Cria um título para a seção de cursos.
    titulo.textContent = 'Cursos'

    const paragrafo = document.createElement('p') // Cria um parágrafo para descrever os cursos oferecidos.
    paragrafo.textContent = 'Aqui estão os cursos oferecidos pela FATEC São Roque.'

    const listaCursos = document.createElement('ul')
    const cursos = ['Sistemas para Internet', 'Administração', 'Gastronomia', 'Turismo']

    const formulario = document.createElement('form') //formulário para adicionar cursos e enviar mensagens;
    const inputCursoNome = document.createElement('input')
    inputCursoNome.type = 'text'
    inputCursoNome.placeholder = 'Digite o nome do curso'
    inputCursoNome.required = true
    formulario.appendChild(inputCursoNome)

    const inputNome = document.createElement('input') //nome do aluno;
    inputNome.type = 'text'
    inputNome.placeholder = 'Digite seu nome'
    inputNome.required = true
    formulario.appendChild(inputNome)

    const botaoAdicionarCurso = document.createElement('button') //nome do curso;
    botaoAdicionarCurso.type = 'submit'
    botaoAdicionarCurso.textContent = 'Adicionar Curso'
    formulario.appendChild(botaoAdicionarCurso)

    const inputEmail = document.createElement('input') //email do aluno;
    inputEmail.type = 'email'
    inputEmail.placeholder = 'Digite seu e-mail'
    inputEmail.required = true
    formulario.appendChild(inputEmail)

    const inputMensagem = document.createElement('textarea') //mensagem do aluno em específico;
    inputMensagem.placeholder = 'Digite sua mensagem'
    inputMensagem.required = true
    formulario.appendChild(inputMensagem)

    const botaoEnviarMensagem = document.createElement('button') //mensagem do aluno em específico;
    botaoEnviarMensagem.type = 'submit'
    botaoEnviarMensagem.textContent = 'Enviar Mensagem'
    formulario.appendChild(botaoEnviarMensagem)

    const mensagemSucesso = document.createElement('p') //mensagem de sucesso após o envio do formulário;
    mensagemSucesso.style.display = 'none'
    mensagemSucesso.textContent = 'Mensagem enviada com sucesso!'
    formulario.appendChild(mensagemSucesso)

    formulario.replaceChild(mensagemSucesso, botaoEnviarMensagem, inputMensagem, botaoAdicionarCurso) //substitui o botão de envio pela mensagem de sucesso após o envio do formulário;

    root.replaceChildren(titulo, paragrafo, formulario, listaCursos)
    
    cursos.forEach((nomeCurso) => { // Itera sobre cada curso na lista de cursos.
        const itemCurso = document.createElement('li')
        itemCurso.textContent = nomeCurso
        listaCursos.appendChild(itemCurso)
    })

    root.replaceChildren(titulo, paragrafo, formulario, listaCursos)
}

// Cria e exibe as informações oficiais de contato da FATEC São Roque.
function contatoPage() {
    const root = document.getElementById('root')
    root.className = 'contato'

    const titulo = document.createElement('h1')
    titulo.textContent = 'Contato'

    const instituicao = document.createElement('h2')
    instituicao.textContent = 'FATEC São Roque – Dr. Bernardino de Campos'

    const endereco = document.createElement('p')
    endereco.textContent = 'Endereço: Rua Marechal Deodoro da Fonseca, 132 - Centro, São Roque - SP, CEP: 18130-070'

    const telefone = document.createElement('p')
    telefone.append('Telefone: ')
    const linkTelefone = document.createElement('a')
    linkTelefone.href = 'tel:+551147136604'
    linkTelefone.textContent = '(11) 4713-6604'
    telefone.appendChild(linkTelefone)

    const horario = document.createElement('p')
    horario.textContent = 'Horário de funcionamento: segunda a sexta, das 09h às 21h; sábado, das 09h às 13h.'

    const fonte = document.createElement('a')
    fonte.href = 'https://fatecsaoroque.cps.sp.gov.br/'
    fonte.target = '_blank'
    fonte.rel = 'noopener noreferrer'
    fonte.textContent = 'Consultar o site oficial da FATEC São Roque'

    root.replaceChildren(titulo, instituicao, endereco, telefone, horario, fonte)
}

// Renderiza a seção indicada pelo fragmento do endereço.
function renderPage() {
    const pagina = window.location.hash.slice(1)

    if (pagina === 'about') {
        sobrePage()
    } else if (pagina === 'cursos') {
        cursosPage()
    } else if (pagina === 'contato') {
        contatoPage()
    } else {
        homepage()
    }
}

// Atualiza o conteúdo quando o usuário usa os links ou os botões voltar/avançar.
window.addEventListener('hashchange', renderPage)

// Mostra a seção correta ao abrir ou recarregar o site.
renderPage()
