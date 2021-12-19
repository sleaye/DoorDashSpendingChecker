let amount = 0;
for(let i = 0; i < document.getElementsByClassName("sc-bdVaJa bRllfg").length; i++) {
    const div = document.getElementsByClassName("sc-bdVaJa bRllfg")[i]
    const text = div.getElementsByTagName("div")[0].innerText;
    let price = text.substr(text.indexOf("$") + 1)
    price = price.substr(0, price.indexOf(".") + 3)
    amount += parseFloat(price);
    console.log(`This order costed you $${price}, you have now spent $${Math.floor(amount)}`)
}
