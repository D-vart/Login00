# Projeto Tela de Login Espacial

## Descrição
Projeto de uma tela de login com design futurista e visual moderno. O projeto foi implementado sem Tailwind CSS no frontend e utiliza apenas HTML, CSS e JavaScript puro.

## Tecnologias Utilizadas
- HTML5
- CSS3 (variáveis, gradientes e animações)
- JavaScript (Vanilla JS)
- Google Fonts (Space Grotesk)

## Funcionalidades Implementadas
1. **Design Visual**
   - Card de login com efeito parallax ao mover o mouse.
   - Layout responsivo para dispositivos móveis.

2. **Validação de Formulário**
   - Validação de e-mail com regex.
   - Validação de senha com mínimo de 6 caracteres.
   - Mensagens de erro exibidas abaixo dos campos.

3. **Limite de Tentativas**
   - Limite de 3 tentativas de login no frontend.
   - Bloqueio do botão de login após exceder o limite.

4. **Acessibilidade**
   - Uso de atributos ARIA em elementos de formulário.
   - Mensagens de erro com `role="alert"` e `aria-live`.

5. **Feedback de Sucesso**
   - Mostra uma mensagem de sucesso ao enviar o formulário corretamente.

## Como Executar
1. Abra `index.html` no navegador.
2. Preencha o formulário de login.
3. O script `js/script.js` realiza a validação e exibe mensagens de erro ou sucesso.

> Observação: este projeto não possui backend. A validação atual ocorre apenas no frontend para fins de demonstração.

## Estrutura do Projeto
- `index.html`: arquivo principal com a estrutura HTML da página.
- `public/style.css`: arquivo CSS com o estilo do layout.
- `js/script.js`: arquivo JavaScript com a lógica de validação e interações.

---
