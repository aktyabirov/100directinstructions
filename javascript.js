var quotes = [
    'Do not be rude in speech (3:159)',
    'Restrain Anger (3:134)',
    'Be good to others (4:36)',
    'Do not be arrogant (7:13)',
    'Forgive others for their mistakes (7:199)',
    'Speak to people mildly (20:44)',
    'Lower your voice (31:19)',
    'Do not ridicule others (49:11)',
    'Be dutiful to parents(17:23)',
    'Do not say a word of disrespect to parents (17:23)',
    'Do not enter parents private room without asking permission (24:58)',
    'Write down the debt (2:282)',
    'Do not follow anyone blindly (2:170)',
    'Grant more time to repay if the debtor is in hard time (2:280)',
    'Dont consume interest (2:275)',
    'Do not engage in bribery (2:188)',
    'Do not break the promise (2:177)',
    'Keep the trust (2:283)',
    'Do not mix the truth with falsehood (2:42)',
    'Judge with justice between people (4:58)',
    'Stand out firmly for justice (4:135)',
    'Wealth of the dead should be distributed among his family members (4:7)',
    'Women also have the right for inheritance (4:7)',
    ' Do not devour the property of orphans (4:10)',
    ' Protect orphans (2:220)',
    'Do not consume one another’s wealth unjustly (4:29)',
    ' Try for settlement between people (49:9)',
    ' Avoid suspicion (49:12)'
    

];


function newQuote(){
    var randomNumber = Math.floor (Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML =quotes[randomNumber];
}