import React, { useState, useEffect } from "react";
import { ChakraProvider, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const DonationComponent = () => {
  const [paymentHandler, setPaymentHandler] = useState(null);
  const [paymentReference, setPaymentReference] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("NGN");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => {
      setPaymentHandler(window.PaystackPop);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (paymentHandler) {
      const handler = paymentHandler.setup({
        key: "pk_test_d1faae9a28817f4f3757b584d189895da0bf98ca",
        email: email,
        amount: amount * 100, // Convert amount to kobo
        currency: currency,
        callback: (response) => {
          setPaymentReference(response.reference);
          alert("Payment successful! Reference: " + response.reference);
        },
        onClose: () => {
          alert("Payment window closed.");
        },
      });
      handler.openIframe();
    } else {
      alert("Payment handler is not ready yet. Please try again.");
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ChakraProvider>
      <div className="max-w-2xl mx-auto bg-white rounded-lg my-[3rem] overflow-hidden">
        <div className="p-8">
          <h2 className="text-xl md:text-2xl font-bold md:text-center mb-2">
            TOGETHER, WE CAN MAKE A LASTING IMPACT.
          </h2>
          <p className="text-sm md:text-base md:text-center text-gray-600 mb-6">
            Thank You For Your Support And Generosity.
          </p>

          <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-indigo-700 text-white text-center py-4 text-xl md:text-2xl font-semibold">
              Give
            </div>
            <div className="p-8">
              <div className="border rounded-md mb-6">
                <div className="p-6 text-center">
                  <p className="text-xl md:text-2xl font-semibold text-gray-700">
                    20485918
                  </p>
                  <p className="text-lg md:text-xl text-gray-600">20-45-45</p>
                  <p className="mt-2 text-sm md:text-base text-gray-600">
                    The Redeemed Christian Church Of
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    God House Of Mercy High Wycombe
                  </p>
                </div>
                <div className="bg-indigo-700 text-white p-4 text-xs md:text-sm md:text-center">
                  Please Include In The Description What Purpose You Would Be
                  Giving
                  <br />
                  For, While You Make Your Transfer.
                </div>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="px-4 text-sm md:text-base text-gray-500">
                  Or
                </span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>

              <Button onClick={openModal} className="w-full border-2 border-gray-300 border-dashed text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition duration-300 flex items-center justify-center text-sm md:text-base">
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                </svg>
                Pay With Card
              </Button>

              <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Enter Payment Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl id="amount" isRequired mt={4}>
                      <FormLabel>Amount</FormLabel>
                      <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </FormControl>
                    <FormControl id="currency" isRequired mt={4}>
                      <FormLabel>Currency</FormLabel>
                      <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option value="NGN">NGN</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                      </Select>
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handlePayment}>
                      Pay
                    </Button>
                    <Button variant="ghost" onClick={closeModal}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default DonationComponent;
