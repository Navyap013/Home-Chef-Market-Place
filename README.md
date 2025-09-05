# Home-Chef-Market-Place

**Home-Chef-Market-Place** is a full-stack web application that connects local home chefs with customers seeking authentic, homemade meals. Built with a modern client–server architecture, this platform empowers home cooks to showcase their culinary offerings while enabling users to discover, order, and enjoy home-cooked fare.

##  Features
- **Chef Profiles**: Home chefs can register, create profiles, list dishes, and share personal stories or specialties.
- **Customer Experience**: Users can browse available meals, filter by cuisine/dietary preferences, place orders, and review meals.
- **Robust Backend**: Server handles authentication, order management, menus, and user data securely.
- **Responsive Design**: Client-side built with modern frameworks for seamless experience across devices.
- **Separation of Concerns**:
  - `client/`: Frontend app for user and chef interfaces.
  - `server/`: Backend API and database logic.

##  Getting Started

### Prerequisites
- **Node.js** (v16+)
- **npm** or **yarn**

### Installation
```bash
git clone https://github.com/Navyap013/Home-Chef-Market-Place.git
cd Home-Chef-Market-Place

# Client setup
cd client
npm install
npm run dev       # Launches frontend in development mode

# Server setup (in separate terminal)
cd ../server
npm install
npm run dev       # Launches backend (e.g., on http://localhost:5000)


Navigate to http://localhost:3000 (or your specified port) to explore the platform.

Project Structure
Home-Chef-Market-Place/
├── client/               # Frontend application (React/Angular/Vue)
├── server/               # Backend API, authentication, order logic
├── README.md             # Project overview
├── package.json          # Root-level commands & settings (if applicable)

Usage Flow

Chefs sign up and build their profile—adding dishes and personal details.

Customers explore listings, apply filters, and place meal orders.

Orders are handled and tracked by the backend; chefs manage order fulfillment.

Customers provide feedback and reviews post-delivery.
