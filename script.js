const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');

let total = 0;

expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (!name || isNaN(amount)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Adicionar despesa à lista
    const li = document.createElement('li');
    li.innerHTML = `
        ${name} 
        <span class="${amount > 100 ? 'red' : ''}">R$ ${amount.toFixed(2)}</span>
        <button class="remove-btn">Remover</button>
    `;

    expenseList.appendChild(li);

    // Atualizar total
    total += amount;
    totalAmount.textContent = total.toFixed(2);

    // Limpar formulário
    expenseForm.reset();

    // Remover despesa
    li.querySelector('.remove-btn').addEventListener('click', function () {
        total -= amount;
        totalAmount.textContent = total.toFixed(2);
        li.remove();
    });
});
