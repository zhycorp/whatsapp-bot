const { evaluate } = require("mathjs");

exports.run = async (message, bot, args) => {
    const expressions = args.join(" ");
    console.log(expressions);
    const answer = evaluate(expressions);
    console.log(answer);
    bot.sendText(message.from, answer.toString());
};

exports.help = {
    name: "Math",
    description: "Calculate stuffs",
    usage: "math <expression>",
    cooldown: 5,
};