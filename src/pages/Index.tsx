import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useRef } from "react";

const Index = () => {
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const gifts = [
    { icon: "Gift", text: "Деньги (лучший подарок)", emoji: "💸" },
    { icon: "Coffee", text: "Кофе или чай", emoji: "☕" },
    { icon: "BookOpen", text: "Книги (желательно не про саморазвитие)", emoji: "📚" },
    { icon: "Heart", text: "Ваше присутствие (самое главное)", emoji: "❤️" },
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/62cb4e12-0b1f-44b9-95c0-90cc1238a3cc/files/860e91fb-046d-44b1-9603-5752edae96c5.jpg",
      alt: "Обезьянка с шариками"
    },
    {
      url: "https://cdn.poehali.dev/projects/62cb4e12-0b1f-44b9-95c0-90cc1238a3cc/files/f52d20ef-b2bb-4b07-8d40-70562ce8124d.jpg",
      alt: "Крутая обезьяна"
    },
    {
      url: "https://cdn.poehali.dev/projects/62cb4e12-0b1f-44b9-95c0-90cc1238a3cc/files/12ea8999-13e2-4c63-b301-a05dff588824.jpg",
      alt: "Танцующие обезьяны"
    }
  ];

  const handleRSVP = (status: string) => {
    setRsvpStatus(status);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-purple-200">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Music Player */}
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={toggleMusic}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full w-16 h-16 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center"
            size="icon"
          >
            {isPlaying ? (
              <Icon name="Pause" size={28} />
            ) : (
              <Icon name="Music" size={28} />
            )}
          </Button>
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          loop
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        />

        {/* Hero Section */}
        <section className="text-center mb-16 pt-8">
          <div className="inline-block mb-6 animate-bounce-slow">
            <div className="text-8xl">🎉🐒🎂</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            ДЕНЬ РОЖДЕНИЯ ВИЧКИ
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            20 ГОДИКОВ 🎊
          </p>
          <p className="text-xl md:text-2xl text-gray-700 italic mb-6 animate-fade-in">
            Приглашаю моих любимых бабуинчиков на<br />
            <span className="font-bold text-purple-600">УНЫЛОЕ МЕРОПРИЯТИЕ</span>
          </p>
          <div className="flex justify-center gap-4 text-4xl animate-scale-in">
            🙈 🙉 🙊
          </div>
        </section>

        {/* Event Details */}
        <section id="details" className="mb-16">
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-4 border-purple-300 hover:shadow-purple-300/50 transition-all duration-300 animate-scale-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="Calendar" size={32} className="text-orange-500" />
              <h2 className="text-4xl font-black text-gray-800">О МЕРОПРИЯТИИ</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl">
                <Icon name="CalendarDays" size={40} className="mx-auto mb-3 text-orange-600" />
                <p className="text-lg font-bold text-gray-700 mb-1">ДАТА</p>
                <p className="text-2xl font-black text-orange-600">24 НОЯБРЯ 2025</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl">
                <Icon name="Clock" size={40} className="mx-auto mb-3 text-pink-600" />
                <p className="text-lg font-bold text-gray-700 mb-1">ВРЕМЯ</p>
                <p className="text-2xl font-black text-pink-600">18:00</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl">
                <Icon name="MapPin" size={40} className="mx-auto mb-3 text-purple-600" />
                <p className="text-lg font-bold text-gray-700 mb-1">МЕСТО</p>
                <p className="text-2xl font-black text-purple-600">СЕКРЕТНАЯ ЛОКАЦИЯ 🗺️</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-100 rounded-2xl border-2 border-yellow-400">
              <p className="text-xl font-bold text-center text-gray-800">
                🎁 ЖДУ ПОДАРКИ 🎁
              </p>
              <p className="text-center text-gray-700 mt-2">
                Вас ждут незабываемые впечатления,<br />
                море положительных эмоций и моих слёз 😭
              </p>
            </div>
          </Card>
        </section>

        {/* Gifts Section */}
        <section id="gifts" className="mb-16">
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-4 border-pink-300 hover:shadow-pink-300/50 transition-all duration-300 animate-scale-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="Gift" size={32} className="text-pink-500" />
              <h2 className="text-4xl font-black text-gray-800">ЧТО ПОДАРИТЬ?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {gifts.map((gift, index) => (
                <div
                  key={index}
                  className="p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border-2 border-pink-200 hover:border-pink-400 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{gift.emoji}</span>
                    <p className="text-lg font-bold text-gray-800">{gift.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-orange-100 rounded-xl border-2 border-orange-300 text-center">
              <p className="text-lg font-bold text-orange-700">
                💡 Главное — это ваше настроение и присутствие! 💡
              </p>
            </div>
          </Card>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mb-16">
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-4 border-orange-300 hover:shadow-orange-300/50 transition-all duration-300 animate-scale-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="Image" size={32} className="text-orange-500" />
              <h2 className="text-4xl font-black text-gray-800">ГАЛЕРЕЯ БАБУИНОВ</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl border-4 border-purple-300 hover:border-orange-400 transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <p className="text-white font-bold text-lg">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-2xl font-black text-gray-800 mb-2">🐵 МЕМЧИКИ С ОБЕЗЬЯНАМИ 🐵</p>
              <p className="text-lg text-gray-600">Больше фоточек будет на самом празднике!</p>
            </div>
          </Card>
        </section>

        {/* RSVP Section */}
        <section id="rsvp" className="mb-16">
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-4 border-purple-300 hover:shadow-purple-300/50 transition-all duration-300 animate-scale-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="MessageCircle" size={32} className="text-purple-500" />
              <h2 className="text-4xl font-black text-gray-800">ПОДТВЕРДИ УЧАСТИЕ</h2>
            </div>
            
            {!rsvpStatus ? (
              <div className="text-center">
                <p className="text-xl text-gray-700 mb-6">
                  Ты придёшь на мой день рождения? 🥺
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => handleRSVP("yes")}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl py-6 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    ДА, БУДУ! 🎉
                  </Button>
                  <Button
                    onClick={() => handleRSVP("no")}
                    variant="outline"
                    className="border-2 border-red-400 text-red-600 hover:bg-red-50 font-bold text-xl py-6 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    НЕТ, НЕ СМОГУ 😢
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center animate-scale-in">
                {rsvpStatus === "yes" ? (
                  <div className="p-8 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl">
                    <p className="text-4xl mb-4">🎊🎉🥳</p>
                    <p className="text-2xl font-black text-green-700 mb-2">УРА! ЖДУУУ ТЕБЯ!</p>
                    <p className="text-lg text-gray-700">Будет весело (наверное) 😄</p>
                  </div>
                ) : (
                  <div className="p-8 bg-gradient-to-r from-red-100 to-red-200 rounded-2xl">
                    <p className="text-4xl mb-4">😭💔</p>
                    <p className="text-2xl font-black text-red-700 mb-2">ОЙ, КАК ЖАЛЬ!</p>
                    <p className="text-lg text-gray-700">Буду скучать без тебя...</p>
                  </div>
                )}
                <Button
                  onClick={() => setRsvpStatus(null)}
                  variant="outline"
                  className="mt-6 font-semibold"
                >
                  Изменить ответ
                </Button>
              </div>
            )}

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-purple-300">
              <p className="text-center text-lg font-bold text-gray-800 mb-3">
                📱 КОНТАКТЫ ДЛЯ СВЯЗИ 📱
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-2 border-purple-400 hover:bg-purple-50 font-semibold flex items-center gap-2"
                >
                  <Icon name="MessageCircle" size={20} />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-pink-400 hover:bg-pink-50 font-semibold flex items-center gap-2"
                >
                  <Icon name="Phone" size={20} />
                  WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 animate-fade-in">
          <p className="text-2xl font-black text-gray-800 mb-2">
            🎂 С НЕТЕРПЕНИЕМ ЖДУ ВСТРЕЧИ! 🎂
          </p>
          <p className="text-lg text-gray-600">
            До встречи, бабуинчики! 🐒💜
          </p>
          <div className="mt-4 text-4xl">
            🎈🎁🎊🎉🥳
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Index;