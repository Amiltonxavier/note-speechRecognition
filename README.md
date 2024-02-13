# Notas de Voz Web App

## Descrição

O Notas de Voz Web App é uma aplicação web inovadora que permite aos usuários fazer anotações de forma prática utilizando o recurso de reconhecimento de voz. Com a capacidade de gravar e transcrever automaticamente o que é falado no microfone, esta aplicação proporciona uma experiência eficiente e moderna para capturar pensamentos e ideias rapidamente.

## Demonstração

[![Demonstração](/public/home.gif)](/public//openDialog.gif)

Confira uma demonstração ao vivo [aqui](https://note-speech-recognition.vercel.app/).

## Funcionalidades

- **Gravação por Voz:** Utilize o microfone para gravar suas ideias de forma rápida e fácil.
- **Transcrição Automática:** As falas são transcritas em tempo real, proporcionando uma experiência de anotação eficiente.
- **Interface Intuitiva:** Design limpo e intuitivo para facilitar a navegação e utilização.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em seu sistema.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Amiltonxavier/note-speechRecognition.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd note-speechRecognition
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

## Uso

1. Inicie a aplicação executando o seguinte comando:

    ```bash
    npm run dev
    ```

2. Abra o navegador e acesse [http://localhost:5173](http://localhost:5173).

3. Pressione o botão de Adicionar nota. 

4. Escolhe a forma que deseja gravar suas notas.

  a. Se caso for Escrita começa a escrever.
  b. Caso for áudio, fale e veja suas palavras sendo transcritas para a área de notas.

5. Para parar a gravação, pressione o botão de gravação p/ de gravar.

## Tecnologias Utilizadas

- **React (Vite):** Desenvolvimento eficiente e rápido.
- **Tailwind CSS:** Estilização moderna e responsiva.
- **SpeechRecognition API:** Reconhecimento de voz para captura de áudio.
- **Sonner:** Toast de sucess ou error.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).