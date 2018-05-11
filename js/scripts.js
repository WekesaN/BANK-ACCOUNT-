function Account(name, depo){
	this.name = name;
	this.deposite = depo;
}
balance = parseFloat(0);
$(document).ready(function(){
	$("#form form").submit(function(event){
		event.preventDefault();

		var inputtedname = $("input#name").val();
		var inputteddepo = parseInt($("input#depo").val());
		balance =parseFloat((inputteddepo)+ (balance));

		$("#output").prepend("<li>" + (inputtedname) + " " + (inputteddepo) + "</li>")

		$("#output").show();

		var inputtedname = $("input#name").val(" ");
		var inputteddepo = $("input#depo").val(" ");

		 parseFloat($("input#depo2").val('0'));
		 parseFloat($("input#withdraw").val('0'));


	})
})

$(document).ready(function(){
	$("#for form").submit(function(event){
		event.preventDefault();

		var inputteddepo2 = parseFloat($("input#depo2").val());
		var inputtedwithdraw = parseFloat($("input#withdraw").val());
		balance = parseFloat((balance)+(inputteddepo2));
		balance = parseFloat((balance)- (inputtedwithdraw));

		$("#output1").prepend("<li>" + "Your current balance is " + balance + "</li>")

		$("#output1").show();

		var inputteddepo2 = $("input#depo2").val(" ");
		var inputtedwithdraw = $("input#withdraw").val(" "); 

		 parseFloat($("input#depo2").val('0'));
		 parseFloat($("input#withdraw").val('0'));



	})
})