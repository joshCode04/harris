function Popup({ onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert("Donation form submitted!");
    onClose(); // Close the popup after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Donate</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="mb-4 flex justify-between gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Expiration Date
              </label>
              <input
                type="text"
                className="border rounded-md p-2 w-full"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">CVV</label>
              <input
                type="text"
                className="border rounded-md p-2 w-full"
                placeholder="123"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Name on Card
            </label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              placeholder="John Doe"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Donate
          </button>
        </form>
        <button className="mt-4 text-gray-500 underline" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Popup;
