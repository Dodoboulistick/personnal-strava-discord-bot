const { SlashCommandBuilder } = require('discord.js');

const Run = require('./../Run.js');

const getDistance = async () => {
    let res = await Run.build()
    return res.totalDistance
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('distancetotale')
		.setDescription('Donne la distance totale parcourue par Dorian'),
	async execute(interaction) {
		await interaction.reply(
            `Dorian a couru ${await getDistance()}km au total.`
        );
	},
};
