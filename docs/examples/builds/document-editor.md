<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css">
    <style>
      body {
        font-family: Ubuntu, sans-serif;
        line-height: 1.25;
      }
    </style>
    <title>Invoice</title>
  </head>
  <body>
    <div style="line-height: normal; position: relative;">
        [subreport=17] 
      <div style="font-size: 12pt; padding-top: 200px; white-space: nowrap;">
        <span style="font-weight: bold; font-size: 18pt;">[invoice_title]: </span>
        <span style="font-weight: bold; font-size: 24pt; color: rgb(49, 185, 169);">[idinvoice]</span>
        <br>
        <br>
        <br>
        <span ">Sant Cugat, [printdate]</span>
        <br>
        <br>
        <span style="font-weight: bold;">[name_customer]</span>
        <br> [vatnrinvoice] <br> [addressinvoice] <br> [postalcodeinvoice], [cityinvoice] <br>
        <br>
        <br>
      </div>
      <div style="border: 2px solid rgb(49, 185, 169); padding: 0px; width: 100%; min-height: 400px;">
        <table style="padding: 0px; font-size: 12pt; margin-top: 0px;" width="100%">
          <tr style="margin: 0px; padding: 0px; background-color: rgb(49, 185, 169); color: white; height: 15px;">
            <td style="width: 35%;">Descripción</td>
            <td style="width: 35%;">Vehículo</td>
            <td style="width: 30%; text-align: right; padding-right: 10px;">Importe sin IVA</td>
          </tr> 
            [detail=9] 
          <tr style="height: 15px;">
            <td></td>
            <td></td>
            <td style="text-align: right; padding-right: 10px;"></td>
            <td style="text-align: right; padding-right: 10px;"></td>
          </tr>
        </table>
      </div>
      <table style="width: 100%; font-size: 12pt;">
        <tr>
          <td style="width: 30%;"></td>
          <td style="width: 30%;"></td>
          <td style="width: 20%; text-align: right; padding-right: 10px; text-align: left;">Base imponible</td>
          <td style="width: 20%; text-align: right; padding-right: 10px;">[format_totalexclvat]</td>
        </tr>
        <tr>
          <td style="width: 30%;"></td>
          <td style="width: 30%;"></td>
          <td style="border-bottom: 4px solid rgb(49, 185, 169); width: 20%; text-align: left;">[vatdescription]</td>
          <td style="border-bottom: 4px solid rgb(49, 185, 169); width: 20%; text-align: right; padding-right: 10px;">[format_vatamount]</td>
        </tr>
        <tr>
          <td style="width: 30%;"></td>
          <td style="width: 30%;"></td>
          <td style="width: 20%; text-align: left; font-weight: bold;">Total [invoice_title_lower]</td>
          <td style="width: 20%; text-align: right; padding-right: 10px; font-weight: bold;">[format_total]</td>
        </tr>
      </table>
      <br>
      <br>
      <table style="font-size: 12pt;">
        <tr>
          <td style="color: gray; padding-right: 10px;">Vencimiento: </td>
          <td>[expirydate]</td>
        </tr>
        <tr>
          <td style="color: gray; padding-right: 10px;">Forma Cobro:</td>
          <td>[paymentmethod]</td>
        </tr>
        <tr>
          <td style="color: gray;">Iban:</td>
          <td>[iban]</td>
        </tr>
      </table>
      <br>
      <br>
      <div style="font-weight: bold; font-size: 18pt; text-align: center; width: 100%;">¡Muchas gracias por tu confianza!</div>
      <br>
      <div style="font-weight: bold; font-size: 14pt; color: rgb(49, 185, 169); text-align: center;  width: 100%;">Ahora que tu vehículo no genera emisiones el planeta es un lugar un poquito mejor.</div>
    </div>
    [subreport=3]
  </body>
</html>
