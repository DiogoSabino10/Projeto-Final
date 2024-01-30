document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    selectable: true, // Permitir seleção de datas
    select: function (info) {
      // Quando uma data é selecionada, exibe o formulário de reserva
      exibirFormularioDeReserva(info);
    },
    events: [
      {
        title: "Disponível",
        start: "2024-01-15",
        end: "2024-01-16",
        className: "fc-event-available",
      },
      {
        title: "reservado",
        start: "2024-01-22",
        end: "2024-01-25",
        className: "fc-event-available",
      },
      
      {
        title: "Disponível",
        start: "2024-01-29",
        end: "2023-01-30",
        className: "fc-event-available",
      },
      // Adicione mais eventos para outros dias disponíveis
    ],
  });

  calendar.render();

  function exibirFormularioDeReserva(info) {
    // Exibe um formulário simples para fazer uma reserva
    var selectedDate = info.startStr;
    var formulario = document.createElement("div");
    formulario.innerHTML = `
            <h2>Reserve a Data</h2>
            <p>Selecione a data: ${selectedDate}</p>
            <form>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <button type="submit" class="botao">Reservar</button>
            </form>
        `;

    // Substitua o conteúdo da seção de reservas pelo formulário
    var secaoReservas = document.getElementById("reservas");
    secaoReservas.innerHTML = "";
    secaoReservas.appendChild(formulario);
  }
});
