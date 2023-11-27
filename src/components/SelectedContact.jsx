import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContactData() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const data = await response.json();
                setContact(data);
            } catch (error) {
                console.error('Error fetching contact:', error);
            }
        }

        if (selectedContactId) {
            fetchContactData();
        }
    }, [selectedContactId]);
    return (
        <div>
            <h2>Contact Details</h2>
            {contact ? (
                <div>
                    <p>Name: {contact.name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                </div>
            ) : (
                <p>Loading contact details...</p>
            )}
        </div>
    );
}


