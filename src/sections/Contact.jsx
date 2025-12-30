import { useRef, useState } from "react";
import ButtonForm from "../components/ButtonForm.jsx";


const Contact = () => {
    const formRef = useRef(null);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
     e.preventDefault();
     setSuccess(true);
     setForm({ name: "", email: "", message: "" });
     setTimeout(() => setSuccess(false), 4000);
    };


    return (
        <section id="contact" className="bg-[#154649] max-w-screen-xl mx-auto px-8 sm:px-12 md:px-12 lg:px-16 py-20">
            <div className="w-full h-px bg-gray-200 mb-20"></div>

            <div className="mb-6 max-w-md">
                <h1 className="text-3xl font-serif md:text-3xl text-left text-white">Planning your trip or have questions? </h1>
                <p className="italic text-gold text-3xl font-serif underline mt-4">Send us a hi</p>
            </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">   
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-2 max-w-sm"
                    >
                      <div>
                        <label className="block text-xs text-gray-300 mb-1">Your name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border-b border-white/30 py-2 text-white text-sm focus:outline-none focus:border-gold resize-none"
                        />
                     </div>

                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/30 py-2 text-white text-sm focus:outline-none focus:border-gold resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-300 mb-1">Your Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="3"
                        required
                        className="w-full bg-transparent border-b border-white/30 py-2 text-white text-sm focus:outline-none focus:border-gold resize-none"
                     />
                    </div>
                    
                    <div className="mt-4">
                      <ButtonForm text="Send message">                    
                      </ButtonForm>
                    </div>

                    {success && (
                      <p className="text-xs text-gold mt-2 italic">Thank you! Your message has been sent.</p>
                  )}          
                </form>
                    
                    <div className="mt-10 md:mt-0 md:w-[40%] space-y-6">
                <div>
                    <h5 className="text-lg font-serif text-gray-200">High Tatras, Slovakia</h5>
                    <p className="text-sm text-gray-200">Starý Smokovec 1</p>
                    <p className="text-sm  text-gray-200">062 01 High Tatras, Slovakia</p>
                    
                </div>
                <div>
                    <p className="font-medium text-xs text-gray-200">Email us at</p>
                    <p className="text-gold text-sm">info@hightatras.sk</p>
                </div>
                <div>
                    <p className="font-medium text-xs  text-gray-200">If you´re hurry, quick call for us.</p>
                    <h4 className="text-gold font-medium text-lg">+421 944-508-509</h4>
                </div>
            </div>
        </div>
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </section>
    );
};

export default Contact;