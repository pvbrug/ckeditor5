<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <title>Contrato Renting</title>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mulish">

  <style type="text/css">
    .fontUbuntu{font-family: Ubuntu, sans-serif;} 
    .title{font-weight: bold; font-size: 15pt; vertical-align: bottom;} 
    .subtitleLight{font-size: 12pt; vertical-align: bottom;} 
    .subtitleBold{font-size: 12pt; vertical-align: bottom; font-weight: bold; color: black;} 
    .msGreen{color: #31B9A9;} 
    .smallText{font-size: 9pt; color: #666; line-height: 15px; font-weight: normal; font-family: Mulish, sans-serif;} 
    .mediumSizeLight{font-size: 10pt;} 
    .mediumSizeBold{font-weight: 450; font-size: 10pt; color: black;} 
    .separationLine{margin: 0 0 4px; border-top: 1px solid black;"}
  </style>

</head>
<body>
<div style="height: 100%; line-height: 10px; position: relative;">[subreport=17]</div>
<div class="fontUbuntu">
<table style="width:100%">
    <tr style="height: 10px;"></tr>
    <tr>
        <td class="title">Contrato de Arrendamiento de Vehículo <span class="title msGreen">[reference]</span></td>
        <td style="width: 5%;"></td>
        <td></td>
        <td style="width: 5%;"></td>
        <td class="subtitleLight" style="text-align: right;">Fecha: <span class="subtitleBold msGreen" style="text-align: right;">[startdate]</span></td>
    </tr>
</table>

<table>
    <tr><td class="smallText">Las Condiciones Generales anexas a la aceptación de la propuesta de renting de vehículos firmado entre:</td></tr>
    <tr><td class="mediumSizeBold" style="padding-left: 30px;">  [name_customer]  </td></tr>
    <tr><td class="mediumSizeLight" style="padding-left: 30px;">  [official_registration] </td></tr>
    <tr><td class="mediumSizeLight" style="padding-left: 30px;">  [address_1]  </td></tr>
</table>

<table>
    <tr><td class="smallText">Designado en adelante como el "ARRENDATARIO" y</td></tr>
    <tr><td class="mediumSizeBold" style="padding-left: 30px;">  Mobility Service Electric Renting, SA  </td></tr>
    <tr><td class="mediumSizeLight" style="padding-left: 30px;">  A04934113  </td></tr>
    <tr><td class="mediumSizeLight" style="padding-left: 30px;">  Av. Via Augusta, 15-25, 08174 Sant Cugat del Vallès, Barcelona  </td></tr>
</table>
<p class="smallText">Designado en adelante como "MOBILITY SERVICE", son parte integrante de este contrato y forman parte del mismo, excepto cuando se establezcan 
explícitamente otras condiciones, junto con la Notificación de Puesta a Disposición del vehículo.</p>
<table style="width: 100%">
    <tr>
        <td class="mediumSizeBold" style="width: 60%; padding-left: 30pt; width: 51%; font-size: 11pt;">[vehicledescription]</td>
        <td class="smallText" style="width: 20%;"><span> Bastidor:</span> <span style="font-weight: bold; font-size: 11pt;">[chassisnr]</span></td>
        <td style="width: 20%;"></td>
    </tr>

    <tr style="height: 40px">
        <td class="smallText" style="width: 60%; padding-left: 60pt;">Color: <span class="mediumSizeBold">[color]</span></td>
        <td class="mediumSizeLight" style="width: 20%; text-align: right;">PFF</td>
        <td class="mediumSizeLight" style="width: 20%; text-align: right;">NETO</td>
    </tr>
</table>
<hr class="separationLine">
<table style="white-space: nowrap; width: 100%">
    <tr style="height: 30px">
        <td class="smallText" style="width: 60%;padding-left: 55pt; text-align: left;">Valor del Vehículo</td>
        <td class="smallText" style="width: 20%;text-align: right; font-weight: 450;">[pff]</td>
        <td class="smallText" style="width: 20%;text-align: right;  font-weight: 450;">[nettovehicle]</td>
    </tr>
<tr style="height: 20px; white-space: nowrap;">
        <td class="smallText" style="padding-left: 55pt; text-align: left;">Total opciones</td>
        <td class="smallText" style="text-align: right; font-weight: 450;">[pffoptions]</td>
        <td class="smallText" style="text-align: right;  font-weight: 450;">[nettooptions]</td>
    </tr>
<tr style="height: 20px; white-space: nowrap;">
        <td class="smallText" style=" padding-left: 55pt; text-align: left;">Transporte</td>
        <td class="smallText" style="text-align: right;  font-weight: 450;"></td>
        <td class="smallText" style="text-align: right;  font-weight: 450;">[transportcosts]</td>
    </tr>
</table>
<hr class="separationLine">
<table style="white-space: nowrap; width: 100%">
    <tr>
        <td class="smallText" style="width: 60%; font-weight: 450;"> [moves_text]</td>
        <td class="mediumSizeBold" style="width: 20%; text-align: right;">Valor Total Vehículo</td>
        <td class="smallText" style="width: 20%; font-weight: bold; text-align: right;">[totalprice]</td>
    </tr>
</table>
<table style="width: 100%">
 <tr style="height: 40px">
        <td class="smallText"  style="width: 60%; padding-left: 55pt; text-align: left;">Matriculación</td>
        <td style="width: 20%;"></td>
        <td class="smallText"  style="width: 20%; text-align: right; font-weight: 450;">150,00 €</td>
    </tr>
</table>
<hr class="separationLine">
<table style="margin-bottom: 14px; white-space: nowrap; width: 100%">
    <tr>
        <td class="smallText" style="width: 40%; padding-left: 55pt; text-align: left;">Conductor: <span class="mediumSizeBold">[namedriver]</span></td>
        <td style="width: 20%;"></td>
        <td class="smallText" style="width: 40%; text-align: right;">Matrícula: <span class="mediumSizeBold">[licenseplate]</span></td>
    </tr>
</table>
<p class="smallText">Con referencia al vehículo arriba mencionado, las partes han acordado lo siguiente; MOBILITY SERVICE cederá al ARRENDATARIO el derecho a utilizar el vehículo con el cumplimiento de las siguientes condiciones y el ARRENDATARIO acepta estas condiciones de contratación.</p>

<table class="smallText"  style="white-space: nowrap; width: 100%">
<tr>
<td style="width: 30%; padding-left: 75px; text-align: left;">Plazo Operación:</td>
<td class="mediumSizeBold" style="width: 40%; text-align: left;">[duration] <span class="smallText">Meses</span></td>
<td style="width: 15%; text-align: right;">Fecha Inicio:</td>
<td style="width: 15%; text-align: right;"><span style="font-weight: bold;">[startdate]</span></td>
</tr>
<tr>
<td style="padding-left: 75px;">Kms. Anuales:</td>
<td  class="mediumSizeBold" style="width: 40%; text-align: left;">[distance] <span class="smallText">Kilómetros</span></td>
<td style="text-align: right;">Fecha Finalización:</td>
<td style="text-align: right;"><span style="font-weight: bold;">[enddate]</span></td>
</tr>
<tr>
<td style="padding-left: 75px; text-align: left; ">Kms. Totales:</td>
<td  class="mediumSizeBold" style="width: 40%; text-align: left;">[kmtotal] <span class="smallText">Kilómetros</span></td>
<td style="text-align: right;"></td>
<td></td>
</tr>
<tr>
<td style="width: 30%; padding-left: 75px; text-align: left; ">Fianza:</td>
<td class="mediumSizeBold" style="width: 40%; text-align: left;">[deposit]</td>
<td class="subtitleBold" style="width: 15%; text-align: right; color: grey">Total Cuota Mensual:</td>
<td class="subtitleBold" style="width: 15%; text-align: right; padding-left: 30px; text-align: right;">[leaseprice]</td>
</tr>
<tr>
<td style="width: 30%; padding-left: 75px; text-align: left;">Pago Inicial:</td>
<td  class="mediumSizeBold" style="width: 40%; text-align: left;">[downpayment] <span class="smallText">(IVA NO incluido)</span></td>
<td style="width: 15%; text-align: right;">IVA (21%):</td>
<td style="width: 15%; text-align: right;"><span class="subtitleBold" style="color: grey; padding-left: 30px;">[leasevat]</span></td>
</tr>
<tr>
<td style="padding-left: 75px; text-align: left;">Ajuste Kilometraje:</td>
<td  class="mediumSizeBold" style="width: 40%; text-align: left;">+ 0,10 € Exceso / -0,05 € Defecto</td>
<td style="text-align: right;">Total (IVA incluido):</td>
<td style="text-align: right;"><span class="subtitleBold style="padding-left: 30px;">[totalleaseprice]</span></td>
</tr>
</table>
<hr class="separationLine">
<div class="mediumSizeBold" style="font-size: 12pt; width: 45%;padding-left: 30px;">Servicios Contratados</div>
<table class="smallText" style="line-height: 16px; width: 100%">
<tr >
<td style="padding-left: 75px; text-align: left; ">Mantenimiento y Reparaciones</td>
<td style="text-align: right;">[rm_included]</td>
</tr>
<tr>
<td style="padding-left: 75px; text-align: left;">Cambio de Neumáticos &nbsp;[change_tyres]</td>
<td style="text-align: right;">[tires_included]</td>
</tr>
<tr >
<td style="padding-left: 75px; text-align: left;">Gestión y Reparación de Lunas Dañadas</td>
<td style="text-align: right;">[tpl_included]</td>
</tr>
<tr >
<td style="padding-left: 75px; text-align: left;">Seguro de Resposabilidad Civil</td>
<td style="text-align: right;">[tpl_included]</td>
</tr>
<tr >
<td style="padding-left: 75px; text-align: left;">Servicio de Cobertura - Daños Propios [ownrisk_included]</td>
<td style="text-align: right;">[price_insurance]&nbsp;&nbsp;&nbsp;[tpl_included]</td>
</tr>
<tr >
<td style="padding-left: 75px; text-align: left;">Gestión y pago de Impuestos</td>
<td style="text-align: right;">-INCLUIDO-</td>
</tr>
<tr >
<td style="padding-left: 75px; text-align: left;">Asistencia en carretera 24/7</td>
<td style="text-align: right;">[tpl_included]</td>
</tr>
<tr >
<td style="padding-left: 75px; text-align: left;">Gestión y Recurso de Sanciones</td>
<td style="text-align: right;">-INCLUIDO-</td>
</tr>
<tr>
<td style="padding-left: 75px; text-align: left;">Vehículo de Sustitución</td>
<td style="text-align: right;">[vehiclesubstitute_included]</td>
</tr>
<tr">
<td style="padding-left: 75px; text-align: left;">Instalación Cargador Doméstico Wallbox</td>
<td style="text-align: right;">[evcharger_included]</td> 
</tr>
<tr>
<td style="padding-left: 75px; text-align: left;">Llavero Recarga Mobility Service</td>
<td style="text-align: right;">-NO INCLUIDO-</td>
</tr>
</table>
<div class="mediumSizeBold" style="font-size: 12pt; width: 45%; line-height: 30pt; padding-left: 30px;">Detalle Opciones Adicionales del Vehículo</div>

<div class="smallText" style="text-align: left; padding: 0px 0 5px; padding-left: 30px;">[fleetvehicleoptiondescription]</div>

<table style="border: 1px solid black; width: 100%;">
    <tr>
      <td style="width: 50%; padding: 10px 0 0 10px; font-size: 9pt; text-align: left;">
         En Sant Cugat del Vallès, Barcelona a [printdate]
      </td>
      <td style="width: 50%;">
      </td>
    </tr>
    <tr>
      <td style="padding: 0 0 0 25px; font-size: 9pt; font-weight: bold; text-align: left;">
         Mobility Service Electric Renting, SA
      </td>
      <td style="font-size: 9pt; font-weight: bold; text-align: center;">
         [name_customer]
      </td>
    </tr>
    <tr style="height: 40pt;">
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td style="padding: 0 0 10px 60px; font-size: 9pt; text-align: left;">
         (PAUL HARMS)
      </td>
      <td style="font-size: 9pt; text-align: center;">
         ([namesigner])
      </td>
    </tr>
</table>


</body>
</html>
