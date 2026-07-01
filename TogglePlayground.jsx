import { useState } from "react";

function TogglePlayground() {
  // ✅ YAHI saari states banengi
  const [isDark, setIsDark] = useState(false);
  const [isLogin , setIsLogin] = useState(false);
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [showPassword, setShowPassword] = useState(false);
 const [IsModalsOpen , setIsModalsOpen] = useState(false);
 const [IsLike , setIsLike] = useState(false);
 const [IsFavorite, setIsFavorite] = useState(false);
 const [IsAccordionOpen , setIsAccordionOpen] = useState(false);
 const [IsDropdownOpen , setIsDropdownOpen] = useState(false);
 const [IsNotificationOpen , setIsNotificationOpen] = useState(false);

  function handleDarkMode() {
    setIsDark(!isDark);
  }
  
  function handleLogin() {
    setIsLogin(!isLogin);
  }
function handleSidebar() {
  setIsSidebarOpen(!isSidebarOpen);
}

function handlePassword() {
  setShowPassword(!showPassword);
}

  function handlePassword() {
  setShowPassword(!showPassword);
}

 function handleModals() {
  setIsModalsOpen(!IsModalsOpen)
 }

 function handleLike() {
  setIsLike(!IsLike)
 }

 function handleFavorite() {
   setIsFavorite(!IsFavorite);
 }

 function handleAccordion(){
  setIsAccordionOpen(!IsAccordionOpen)
 }

 function handleDropdown() {
  setIsDropdownOpen(!IsDropdownOpen)
 }

 function handleNotification() {
  setIsNotificationOpen(!IsNotificationOpen)
 }

  return (
    <div className={isDark ?  "min-h-screen bg-white text-black" : "min-h-screen bg-black text-white" }>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">React Toggle Logic Playground</h1>
        <p className="mb-8 text-gray-500">
          Chapter 1: Dark Mode, Login, Sidebar, Modal, Password, Like, Favorite, Accordion, Dropdown, Notification
        </p>

        {/* 1. Dark Mode - example solved */}
        <div className="p-5 rounded-2xl border mb-4">
          <h2 className="text-xl font-semibold mb-3 ">1. Dark Mode</h2>

          <button
            onClick={handleDarkMode}
            className="px-4 py-2 rounded-xl bg-purple-600 text-white"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* 2. Login / Logout */}
        <div className="p-5 rounded-2xl border mb-4">
          <h2 className="text-xl font-semibold mb-3">2. Login / Logout</h2>

          <button onClick={handleLogin}>
            {isLogin ? "Logout" : "Login"}
          </button>

          {/* TODO:
            1. state: const [isLogin, setIsLogin] = useState(false)
            2. function: handleLogin()
            3. click par setIsLogin(!isLogin)
            4. button text: isLogin ? "Logout" : "Login"
          */}
          {/* TODO: isLogin true ho to "Welcome Vishal" show karna */}
        </div>

        {/* 3. Sidebar Open / Close */}
        
             <button
             className="px-4 py-2 rounded-xl bg-green-600 text-white"
              onClick={handleSidebar}
               >
                  {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
         </button>

              {isSidebarOpen && (
                 <div className="mt-4 p-4 rounded-xl bg-green-100 text-black">
              Sidebar Open Hai
            </div>
         )}


        {/* 4. Modal Open / Close */}
        <div className="p-5 rounded-2xl border mb-4">
          <h2 className="text-xl font-semibold mb-3">4. Modal</h2>

          {/* TODO:
            state: isModalOpen
            function: handleModal()
            button se modal open/close
          */}
          <button className="px-4 py-2 rounded-xl bg-pink-600 text-white" onClick={handleModals}> 
               {IsModalsOpen ? "Close Modals" : "Open Modals"}  
          </button>

          {/* TODO: modal box show/hide */}
        </div>

        {/* 5. Password Show / Hide */}
        
                 <input
           type={showPassword ? "text" : "password"}
           value="mypassword123"
           readOnly
           className="px-4 py-2 rounded-xl border mr-3 text-black"
       />

       <button
         className="px-4 py-2 rounded-xl bg-orange-600 text-white"
            onClick={handlePassword}
         >
          {showPassword ? "Hide" : "Show"}
      </button>

        {/* 6. Like Button */}
        <div className="p-5 rounded-2xl border mb-4">
          <h2 className="text-xl font-semibold mb-3">6. Like Button</h2>
          </div>

          {/* TODO:
            state: isLiked
            function: handleLike()
            text/icon: isLiked ? "❤️ Liked" : "🤍 Like"
          */}
          <button className="px-4 py-2 rounded-xl bg-red-600 text-white" onClick={handleLike}>
           {IsLike ? "Liked ❤️" : "Like 🤍"}
          </button>
        

        {/* 7. Favorite Button */}
        <div className="p-5 rounded-2xl border mb-4">
          <h2 className="text-xl font-semibold mb-3">7. Favorite</h2>

          {/* TODO:
            state: isFavorite
            function: handleFavorite()
            text/icon: isFavorite ? "⭐ Favorited" : "☆ Favorite"
          */}
          <button className="px-4 py-2 rounded-xl bg-yellow-500 text-black"   onClick={handleFavorite}>
            {IsFavorite ? "⭐ Favorited" : "☆ Favorite"}
          </button>
        </div>

        {/* 8. Accordion */}
        <div className="p-5 rounded-2xl border mb-4">
          <h2 className="text-xl font-semibold mb-3">8. Accordion</h2>

           </div>

          {/* TODO:
            state: isAccordionOpen
            function: handleAccordion()
            question click par answer show/hide
          */}
          <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-100 text-black" onClick={handleAccordion}>
            {IsAccordionOpen ? " What is React?" : "React is a JavaScript library for building user interfaces."}
          </button>

          {/* TODO: answer show/hide */}
       

        {/* 9. Dropdown */}
        <div className="p-5 rounded-2xl border mb-4">
          <h2 className="text-xl font-semibold mb-3">9. Dropdown</h2>

          {/* TODO:
            state: isDropdownOpen
            function: handleDropdown()
            options show/hide
          */}
          <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white" onClick={handleDropdown}>
            Open Menu {IsDropdownOpen ? "▲" : "▼"}
          </button>

          {/* TODO: dropdown menu show/hide */}
        </div>

        {/* 10. Notification Panel */}
        <div className="p-5 rounded-2xl border mb-4">
          <h2 className="text-xl font-semibold mb-3">10. Notification Panel</h2>

          {/* TODO:
            state: isNotificationOpen
            function: handleNotification()
            panel show/hide
          */}
          <button className="px-4 py-2 rounded-xl bg-teal-600 text-white" onClick={handleNotification}>
            🔔 Notifications {IsNotificationOpen ? "▲" : "▼"}
          </button>

          {/* TODO: notification panel show/hide */}
        </div>
      </div>
    </div>
  );
}

export default TogglePlayground;