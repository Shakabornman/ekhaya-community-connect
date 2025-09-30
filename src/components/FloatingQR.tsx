const FloatingQR = () => {
  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50">
      <div className="bg-white p-1.5 sm:p-2 rounded-lg shadow-lg border">
        <img 
          src="/lovable-uploads/87d3c9f8-8274-4ca9-9ceb-047a12b3df40.png" 
          alt="QR Code" 
          className="w-16 h-16 sm:w-20 sm:h-20"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default FloatingQR;