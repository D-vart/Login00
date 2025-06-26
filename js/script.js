document.addEventListener('DOMContentLoaded', function() {
    // Efeito de parallax no card de login
    const loginCard = document.getElementById('loginCard');
    if (loginCard) {
        loginCard.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            loginCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        // Resetar quando o mouse sai do card
        loginCard.addEventListener('mouseleave', () => {
            loginCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    }
    
    // Validação do formulário
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    
    let loginAttempts = 0;
    const maxLoginAttempts = 3;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (loginAttempts >= maxLoginAttempts) {
            alert('Número máximo de tentativas de login excedido. Por favor, tente novamente mais tarde.');
            return;
        }
        
        let isValid = true;
        
        // Validar e-mail
        if (!validateEmail(emailInput.value)) {
            emailInput.parentElement.classList.add('error');
            emailError.textContent = 'Por favor, insira um e-mail válido.';
            isValid = false;
        } else {
            emailInput.parentElement.classList.remove('error');
            emailError.textContent = '';
        }
        
        // Validar senha
        if (passwordInput.value.length < 6) {
            passwordInput.parentElement.classList.add('error');
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            isValid = false;
        } else {
            passwordInput.parentElement.classList.remove('error');
            passwordError.textContent = '';
        }
        
        if (!isValid) {
            loginAttempts++;
            if (loginAttempts >= maxLoginAttempts) {
                alert('Número máximo de tentativas de login excedido. Por favor, tente novamente mais tarde.');
                loginForm.querySelector('button[type="submit"]').disabled = true;
            }
            return;
        }
        
        // Se válido, mostrar mensagem de sucesso
        if (isValid) {
            successMessage.classList.add('active');
            
            // TODO: Aqui deve ser feita a validação e sanitização no backend para maior segurança.
            // Esta validação no frontend é apenas para experiência do usuário.
            
            // Limpar erros anteriores
            emailInput.parentElement.classList.remove('error');
            passwordInput.parentElement.classList.remove('error');
            
            // Simular redirecionamento após 3 segundos
            setTimeout(() => {
                // Aqui você pode redirecionar para outra página
                console.log('Redirecionando...');
            }, 3000);
        }
    });
    
    // Botão para fechar mensagem de sucesso
    const continueBtn = document.getElementById('continueBtn');
    continueBtn.addEventListener('click', () => {
        successMessage.classList.remove('active');
    });
    
    // Função para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
