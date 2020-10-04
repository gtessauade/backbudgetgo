const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors"); //npm i cors
const cron = require("node-cron");
/* const {
  getAllTokens,
  sendPushNotification,
  getTokenByEmail,
} = require("./services/pushNotificationService"); */
/* const { getCreditCards } = require("./services/creditCardService"); */
/* const {
  getAllDueLoansMovements,
  updateLoanMovement,
} = require("./services/loanService");
const { changeBalance } = require("./services/bankAccountService");
const {
  getTimeDeposits,
  updateInvestment,
} = require("./services/investmentService");
const moment = require("moment");
const { addDaysCurrentDateWithoutFormat } = require("./utils"); */

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

// puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas
app.use("/api/movimientos", require("./Ruteado/movimientos"));
app.use("/api/inversiones", require("./Ruteado/inversiones"));
app.use("/api/medios", require("./Ruteado/medios"));
app.use("/api/prestamos", require("./Ruteado/prestamos"));
app.use("/api/presupuestos", require("./Ruteado/presupuestos"));
app.use("/api/usuarios", require("./Ruteado/usuarios"));

//app.use("/api/pushNotifications", require("./routes/pushNotification"));

// arrancar la app
app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});



/* const CreditCardDueDatesSchedule = async () => {
  try {
    const tokens = await getAllTokens();
    const today = new Date();
    //recorremos por cada token/email
    for (const token of tokens) {
      const creditCards = await getCreditCards(token.email);

      for (const creditCard of creditCards) {
        if (creditCard.dueDateSummary < today) {
          const response = await sendPushNotification(
            token.token,
            "My Budget App - Información Vencida!! 📬",
            `${token.name} por favor Renueve la fecha de vencimiento y cierre de tu tarjeta de crédito 💳`
          );
          console.log(response, "Actualizar Fecha Tarjeta");
        }
      }
    }
  } catch (error) {
    console.log(
      "Error en Proceso Batch de Renovacion de Fecha de Vencimiento de Tarjeta",
      error
    );
  }
};

const BudgetFeesSchedule = async () => {
  try {
    const movements = await getAllDueLoansMovements();
    for (const movement of movements) {
      const { bankAccount, amount } = movement;
      // Se vencio la cuota  ,se debe pagar
      await changeBalance(bankAccount, amount, "Prestamo Tomado");
      movement.paid = "true";
      await updateLoanMovement(movement);
      const token = await getTokenByEmail(movement.email);
      const response = await sendPushNotification(
        token.token,
        "My Budget App - Cuota de Prestamo Pagada!! 📬",
        `${token.name} Se ha debitado la cuota ${movement.numberFee} de su cuenta Bancaria 🏦`
      );

      console.log(response, "Cuota Pagada");
    }
  } catch (error) {
    console.log("Error en Proceso Batch de Pago de Cuotas Vencidas", error);
  }
};

const TimeDepositsSchedule = async () => {
  const timeDeposits = await getTimeDeposits();

  for (const timeDeposit of timeDeposits) {
    if (timeDeposit.dueDate <= new Date()) {
      if (
        timeDeposit.deposited === "false" ||
        timeDeposit.automaticRenovation === "true"
      ) {
        //depositar plata en cuenta
        const profit = (
          timeDeposit.amount *
          ((timeDeposit.interestRate / 100) * (timeDeposit.days / 365))
        ).toFixed(3);
        const total = parseFloat(profit) + parseFloat(timeDeposit.amount);
        await changeBalance(
          timeDeposit.bankAccount,
          total.toFixed(2),
          "Plazo Fijo Acreditación"
        );
        console.log(profit, timeDeposit.amount);
        const token = await getTokenByEmail(timeDeposit.email);
        const resp = await sendPushNotification(
          token.token,
          "My Budget App - 💰 Plazo Fijo Acreditado 💰",
          `${token.name} Se ha acreditado un plazo fijo en su Cuenta Bancaria 🏦`
        );
        console.log(resp, "Plazo fijo depositado");
      }

      if (timeDeposit.automaticRenovation === "true") {
        //actualizar la fecha de vencimiento
        timeDeposit.dueDate = await addDaysCurrentDateWithoutFormat(
          timeDeposit.days
        );
        timeDeposit.deposited = "true";
        await updateInvestment(timeDeposit);
        //debitar monto de PF por la renovación
        await changeBalance(
          timeDeposit.bankAccount,
          timeDeposit.amount * -1,
          "Plazo Fijo Renovación"
        );
      }
    }
  }
  try {
  } catch (error) {
    console.log("Error en proceso Batch de Plazos Fijos", error);
  } 
};*/