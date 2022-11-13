var prefs = [];

var i = 1;
// Quality, Comfort, Control, Power, Spin 
var questionNums = ["Q1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6"];
var questions = ["Q1", "Are you a beginner, intermediate, or advanced?", "Are you prone to injury or have trouble finding a racquets sweet spot?", "Do you have trouble controlling the ball's path?", "Do you have trouble creating power on your swing?", "Do you have trouble creating spin?"];
var prompts = ["Q1", "Input (b/i/a):", "Input (y/n):", "Input (y/n):", "Input (y/n):", "Input (y/n):"]

// save input and append to list, refresh button and question, check for list length
function next_question() {

    var user_input = document.getElementById("input-field").value;
    prefs.push(user_input);
    document.querySelector("input").value = "";
    document.getElementById("question-counter").innerText = questionNums[i];
    document.getElementById("question").innerText = questions[i];
    document.querySelector("label").innerText = prompts[i];

    i++;

    if (i > 6) {
        content = racquet_selector();
        localStorage.setItem("transfered", content);
        window.location.href = "result.html";
    }
}

function racquet_selector() {

    var sequence = [];
    var quality_value = 0

    // Quality
    if (prefs[0] < 100 && prefs[0] >= 0) {
        quality_value += 1;
    }
    else if (prefs[0] < 200) {
        quality_value += 2;
    }
    else if (prefs[0] >= 200) {
        quality_value += 3;
    }

    // Quality pt2
    if (prefs[1] == "b") {
        quality_value += 1;
    }
    else if (prefs[1] == "i") {
        quality_value += 2;
    }
    else if (prefs[1] == "a") {
        quality_value += 3;
    }

    // Quality pt3 (Calculate)
    if (quality_value > 4) {
        sequence.push("T");
    }
    else {
        sequence.push("F");
    }

    // Push Comfort, Control, Power, and Spin
    for (let i = 0; i < 4; i++) {
        if (sequence_push(i + 2) == true) {
            sequence.push("T");
        }
        else {
            sequence.push("F");
        }
    }

    return sequence;
}

function sequence_push(n) {
    if (prefs[n] === "y") {
        return true;
    }
    else {
        return false;
    }
}

function getSequence() {
    var sequences = ["T,T,T,T,T", "T,T,T,T,F", "T,T,T,F,T", "T,T,F,T,T", "T,F,F,T,T", "F,T,F,F,F", "F,T,F,T,F", "F,T,F,F,F", "T,F,T,T,T", 
                     "F,T,T,T,T", "F,T,F,F,T", "F,F,F,F,F"];
    var racquets = ["Wilson Pro Staff v13", "Head Boom MP", "Wilson Clash 100", "Babolat Pure Drive", "Head Extreme MP", "Head Titanium Ti.S6 Strung", 
                    "Prince Ripstick 100", "Head MicroGEL Radical OS", "Yonex VCORE PRO 97H 330", "Head Radical Pro", "Babolat Boost Rafa", "cheapest racquet you can find"];
    var links = [
        "https://www.wilson.com/en-us/product/pro-staff-team-v13-tennis-racket-wr06870",
        "https://www.tennis-warehouse.com/Head_Boom_MP_2022/descpageRCHEAD-BOOMM.html?from=gshop&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEEpFPCz45qgVurROWdef9P2sz3fA1Ogp3wYMcGChWLsehtLTHQuAhQaAj9dEALw_wcB",
        "https://www.tennis-point.com/wilson-clash-100-tour-tennis-racquet/p/WR005711U/?%7Blpurl%7D&device=%7Bdevice%7D&utm_source=google&utm_medium=cpc&utm_campaign=%7BCampaignName%7D&device=c&utm_source=google&utm_medium=cpc&utm_campaign=google_shopping_tennis_racquets_high_end&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEHdI8qqOu6CvcrdJiuuTTeQEMVfFq8mAiC9zXD1CDFtr3m6TrWReqIaAgNXEALw_wcB",
        "https://www.tennis-point.com/babolat-pure-drive-tennis-racquet-2021/p/101435/?%7Blpurl%7D&device=%7Bdevice%7D&utm_source=google&utm_medium=cpc&utm_campaign=%7BCampaignName%7D&device=c&utm_source=google&utm_medium=cpc&utm_campaign=google_shopping_tennis_racquets_high_end&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEFSMfOyL7HF6QtYj9wk644yflrRRuzlvHWS6G0m5fz2PUn-h5bapkUaAlRGEALw_wcB",
        "https://www.tennis-warehouse.com/Head_Extreme_MP_2022/descpageRCHEAD-HREM22.html?from=gshop&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEFpB9cE74DlvV6Kr5YnbgDuvNysv1vcNLWRuIgOjgu-AQbdA-1MrDQaAqLaEALw_wcB",
        "https://www.tennis-point.com/head-titanium-ti-s6-tennis-racuqet/p/1101031/?%7Blpurl%7D&device=%7Bdevice%7D&utm_source=google&utm_medium=cpc&utm_campaign=%7BCampaignName%7D&device=c&utm_source=google&utm_medium=cpc&utm_campaign=google_shopping_tennis_racquets&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEEeJRtRpd2BU3iVMIwaxqK5Dt9E97YGQvzbuAdupqTr772nrddEwNYaAv3VEALw_wcB",
        "https://www.tennis-warehouse.com/Prince_Ripstick_100_300g/descpageRC-PRIPS.html?from=gshop&srsltid=AYJSbAdpVfkkg1UkDwYlLZWOOpQ_RT_pr8BvC0b11L0mfU-W_dln2Ly_Nao",
        "https://www.tennisexpress.com/HEAD-MicroGel-Radical-OS-Prestrung-Tennis-Racquets-26732?gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEF4ZN7bFkTT_En7kCbjIiQAAW-VupKkROaqhyZRsZjRAi8dsWbUb1QaAgnREALw_wcB",
        "https://www.tennis-point.com/yonex-vcore-pro-97h-330g-2021-black-purple-tennis-racquet/p/VCP0397H/?%7Blpurl%7D&device=%7Bdevice%7D&utm_source=google&utm_medium=cpc&utm_campaign=%7BCampaignName%7D&device=c&utm_source=google&utm_medium=cpc&utm_campaign=google_shopping_tennis_racquets_high_end&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEGLbqi09UtVIhpU1T5XQbVDIptDZzDa4xEWxd0QQnI1VujC2ksqvd4aAoskEALw_wcB",
        "https://www.tennis-warehouse.com/Head_Radical_Pro/descpageRCHEAD-HRRP.html?from=gshop&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEEYPX9Hx5uF0PP4WLsDit7LuEQAJf0jEayjnTFssidBaFYE982MWM8aAjoXEALw_wcB",
        "https://www.dickssportinggoods.com/p/babolat-boost-rafa-tennis-racquet-22babubstrfxxxxxxtnn/22babubstrfxxxxxxtnn?sku=22689661&camp=CSE:DSG_92700063748713119_pla_pla-1269999083911&camp=AFF:mediapartner:ONLINE_TRACKING_LINK::10078::315573:Skimbit%20Ltd.&segment=&gclid=CjwKCAjw3qGYBhBSEiwAcnTRLkLPp6BH0J_KK9yuOi19BuiZF3qVrakNCYbOJno_nqKhbY5SNb8-dxoCC7wQAvD_BwE&gclsrc=aw.ds&clickid=VUFXND3zqxyLT5nwUx0Mo3Z2UkDSDDTuxUUjWM0&irgwc=1",
        "https://www.walmart.com/ip/Wilson-Ultra-Power-XL-112-Tennis-Racket-Blue-Adult/616951467?wmlspartner=wlpa&selectedSellerId=0&adid=22222222227000000000&wl0=&wl1=g&wl2=c&wl3=42423897272&wl4=pla-51320962143&wl5=1017557&wl6=&wl7=&wl8=&wl9=pla&wl10=8175035&wl11=online&wl12=616951467&veh=sem&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEEZar3M0ay8K8gKD3Wv-TNA17VvXLPdudPUrOL7Tr65jAtGhHxzk54aAsOhEALw_wcB"];
    var pictures = [
        "https://www.wilson.com/en-us/media/catalog/product/W/R/WR068710U__456a6e798aaae8681a5c42f16ea11f56.png?dpr=1&fit=bounds&orient=1&quality=95&optimize=high&format=pjpg&auto=webp&enable=upscale&width=778&height=950&canvas=778%2C950&bg-color=f5f5f5"];

    console.log(localStorage.getItem("transfered"));
    var sequence = localStorage.getItem("transfered");

    for (var i=0; i<sequences.length; i++) {
        console.log(sequence);
        console.log(sequences[i]);
        if (sequences[i] == sequence) {
            return [racquets[i], links[i], pictures[0]];
        }
    }

    return [racquets[racquets.length - 1], links[links.length - 1], pictures[0]];
}

// Beginner: I’m just starting to learn tennis
// Intermediate: I used to play tennis or started playing recently and want to keep improving
// Advanced: I play regularly and control shots with placement, spin, and power

// Beginner = 1, intermediate = 2, advanced = 3, $99- = 1, $100-$199 = 2, $200+ = 3

// Calculate quality of racquet based on above point system
// 4- = lower quality
// 5+ = higher quality

// Good for spin, power, control, comfort can all be true or false

// function scan_database(answer) {

//     var ans = True;
//     var sequence = [];

//     if (answer == "y") {
//         ans = True;
//     }
//     else if (answer == "n") {
//         ans = False;
//     }

//     var to_remove = []

//     // // Do I have to do this?
//     // for (let i = 0; i < database.length; i++) {
//     //     // if the key of the property in i index of database is not user_input then remove it from the database
//     //     if (database[i][property] != ans) {
//     //         to_remove.push(database[i]);
//     //     }
//     // }

//     // // Does this work?
//     // for (let i = 0; i < database.length; i++) {
//     //     for (let j = 0; j < to_remove.length; j++) {
//     //         if (database[i] === to_remove[j]) {
//     //             database.splice(i);
//     //         }
//     //     }
//     // }

//     // if (database.length == 1) {
//     //     return "\nYour ideal racquet is the " + database[0]["name"];
//     // }
//     // else if (database.length == 0) {
//     //     return "\nSadly, we could not find the perfect racquet for you. I recommend the Wilson Clash 100 since it's the racquet I use, but if you want a more personalized racquet try again with different answers!";
//     // }
// }