// components/Background.tsx
const Background = () => {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Soft Cyan Glow Top Left */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-100/50 blur-[120px]" />
        
        {/* Soft Blue Glow Bottom Right */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
        
        {/* The Grid */}
        <div className="absolute inset-0 bg-grid" />
      </div>
    );
  };
  
  export default Background;