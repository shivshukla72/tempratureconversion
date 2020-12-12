function onSubmit()
{  debugger;
	let result;
    var value=document.getElementById('res').value;
	var option=document.getElementById('temp').value;

	if(!value) 
	{
      alert('please enter the temprature');
	}
  else
    {
	   switch(option)
     	{

		case "c":
		     result=toFahrehneit(value)+" "+"F";
		     document.getElementById('res').value=result;
		     break;
		case "f":

		      result=toCelsius(value)+" "+"C";
		     document.getElementById('res').value=result;
		     break;

		default:
		     break;
	   }
   }  
return false;
}

function toFahrehneit(celsius)
{
  celsius=parseFloat(celsius);
  return celsius*(9/5)+32;

}

function toCelsius(fahrehneit)
{
	fahrehneit=parseFloat(fahrehneit);
	return (fahrehneit-32)*5/9;
}