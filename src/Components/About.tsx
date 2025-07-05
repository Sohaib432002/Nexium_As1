"use client";
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Github, Linkedin, Code, Menu, X, Award, Briefcase, Heart } from 'lucide-react';

const OnePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    //   const scrollToSection = (sectionid) => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //     setIsMenuOpen(false);
    //   };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">


            <section id="about" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                            Discover my journey, skills, and passion for creating exceptional digital experiences
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                    <Code className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold text-blue-900">My Journey</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                I specialize in React, JavaScript, and other modern web technologies. I focus on writing code that's not only functional but also scalable and easy to maintain. I constantly stay updated with the latest frameworks, tools, and best practices to ensure my work remains at the cutting edge of the industry.

                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Over the years, I’ve worked on a range of real-world projects — from e-commerce platforms to portfolio sites, and even full-stack apps using React and Django. I enjoy diving into both frontend and backend challenges and love building things that people actually use.

                            </p>
                            <p className="text-gray-700 leading-relaxed">

                                Outside of coding, I enjoy learning new technologies, contributing to open-source, and mentoring fellow developers. I believe in sharing knowledge and growing together as a community.

                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                        <Award className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-blue-900">Achievements</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                                        <div className="text-3xl font-bold text-blue-600">50+</div>
                                        <div className="text-sm text-gray-600">Projects Completed</div>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                                        <div className="text-3xl font-bold text-blue-600">5+</div>
                                        <div className="text-sm text-gray-600">Years Experience</div>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                                        <div className="text-3xl font-bold text-blue-600">100+</div>
                                        <div className="text-sm text-gray-600">Happy Clients</div>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                                        <div className="text-3xl font-bold text-blue-600">24/7</div>
                                        <div className="text-sm text-gray-600">Support</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                        <Heart className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-blue-900">What I Love</h3>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        Clean, efficient code
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        User-centered design
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        Continuous learning
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        Team collaboration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
                        <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Technical Skills</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: 'React', level: 95 },
                                { name: 'JavaScript', level: 90 },
                                { name: 'React-native', level: 85 },
                                { name: 'Python', level: 80 },
                                { name: 'CSS/Tailwind', level: 90 },
                                { name: 'Django', level: 75 }
                            ].map((skill) => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                        <span className="text-sm text-gray-500">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                    <p className="text-xl text-blue-700 mb-12">
                        Ready to start your next project? Let's connect and make it happen!
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-blue-50 rounded-lg p-6">
                            <Mail className="mx-auto text-blue-600 mb-4" size={32} />
                            <h3 className="font-semibold text-blue-900 mb-2">Email</h3>
                            <p className="text-gray-700">sohaibmaqsoodsohaibmaqsood@gmail.com</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-6">
                            <Phone className="mx-auto text-blue-600 mb-4" size={32} />
                            <h3 className="font-semibold text-blue-900 mb-2">Phone</h3>
                            <p className="text-gray-700">+92 (319) 1057875</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-6">
                            <MapPin className="mx-auto text-blue-600 mb-4" size={32} />
                            <h3 className="font-semibold text-blue-900 mb-2">Location</h3>
                            <p className="text-gray-700">Mianwali, Pakistan</p>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/Sohaib432002?tab=repositories"
                            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-sohaib-maqsood-72b785244/"
                            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="#"
                            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg-blue-900 text-white py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-blue-200">
                        © 2025 sohaib  Portfolio. Built with React 
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default OnePage;