function ScrolToHome() {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

function ScrolToAbout() {
	const AboutSection = document.getElementById('about')
	AboutSection && AboutSection.scrollIntoView({ behavior: 'smooth' })
}

function ScrolToSkills() {
	const SkillsSection = document.getElementById('skills')
	SkillsSection && SkillsSection.scrollIntoView({ behavior: 'smooth' })
}

function ScrolToContact() {
	const ContactSection = document.getElementById('contact')
	ContactSection && ContactSection.scrollIntoView({ behavior: 'smooth' })
}
