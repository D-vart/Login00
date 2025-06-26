# Projeto Tela de Login Espacial

## Descrição
Projeto de uma tela de login com design futurista e efeitos visuais, incluindo efeito parallax no card de login, validação de formulário, limite de tentativas de login, e feedback visual aprimorado. As animações complexas de estrelas e partículas foram removidas conforme solicitação.

## Tecnologias e Frameworks Utilizados
- HTML5
- CSS3 (com variáveis CSS e animações)
- JavaScript (Vanilla JS)
- Google Fonts (Space Grotesk)
- Tailwind CSS CDN (para utilitários adicionais)

## Funcionalidades Implementadas
1. **Design Visual**
   - Card de login com efeito parallax ao mover o mouse.
   - Animações básicas e gradientes de cores.

2. **Validação de Formulário**
   - Validação de e-mail com regex.
   - Validação de senha com mínimo de 6 caracteres.
   - Mensagens de erro exibidas abaixo dos campos.
   - Feedback visual claro para erros e sucesso.

3. **Limite de Tentativas**
   - Limite de 3 tentativas de login no frontend.
   - Bloqueio do botão de login após exceder o limite.
   - Mensagem de alerta para o usuário.

4. **Acessibilidade**
   - Uso de atributos ARIA para melhor navegação por leitores de tela.
   - Ícones marcados como aria-hidden para evitar leitura desnecessária.
   - Mensagens de erro com role="alert" e aria-live para anunciar mudanças.

5. **Efeito de Digitação no Placeholder**
   - Placeholder do campo senha com efeito de digitação animado.

6. **Compatibilidade**
   - Prefixo `-webkit-backdrop-filter` adicionado para compatibilidade com Safari e iOS.

## Estrutura do Projeto
- `index.html`: arquivo principal com a estrutura HTML da página.
- `public/style.css`: arquivo CSS externo com todo o estilo da página.
- `js/script.js`: arquivo JavaScript com toda a lógica e funcionalidades.

---

Este projeto foi desenvolvido com foco em experiência do usuário, acessibilidade e design moderno, utilizando tecnologias web padrão e boas práticas de desenvolvimento.
