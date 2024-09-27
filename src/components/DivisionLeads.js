import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const DivisionLeads = () => {
  const [expandedDivision, setExpandedDivision] = useState(null);

  const divisions = [
    {
      name: "Church Operations",
      leads: [
        { name: "Bimpe Lawal", role: "Church Operations" },
        { name: "Min Helen Kendel", role: "Prayer Dept." },
        { name: "Bukola Akinbumite", role: "Hospitality" },
        { name: "Bro Disu", role: "Sanitation Dept" },
        { name: "Bro Justus Eze", role: "Membership Dept." },
        { name: "Seyi Aladejobi", role: "Ushering" },
        { name: "Pastor Bimpe", role: "Welfare" },
        { name: "TBC", role: "Transport Dept." },
      ],
    },
    {
      name: "Facility Management",
      leads: [
        { name: "Ime Cletus", role: "Facility Mgt." },
        { name: "Min Dupe Akinwunmi", role: "Sunday School Sq" },
        { name: "TBC", role: "Church Beautification" },
        { name: "Min Ime Cletus", role: "Special Program" },
        { name: "TBC", role: "Business/Professional Dev." },
        { name: "TBC", role: "Safety & Security" },
        { name: "TBC", role: "Asset Mgt." },
        { name: "TBC", role: "Foreign Mission" },
      ],
    },
    {
      name: "Outreach Division",
      leads: [
        { name: "TBC", role: "Well-being & Counselling" },
        { name: "TBC", role: "Church Planting" },
        { name: "TBC", role: "Community Engagement" },
        { name: "TBC", role: "Evangelism" },
        { name: "TBC", role: "House fellowship" },
        { name: "TBC", role: "Sports & Leisure" },
      ],
    },
    {
      name: "Admin & Account",
      leads: [
        { name: "Assist Parish Pastor", role: "Admin/Account" },
        { name: "Victor Obanawu", role: "Account" },
        { name: "TBC", role: "Logistics & Policy" },
        { name: "Toyin Fehintolu", role: "Protocol Dept." },
        { name: "TBC", role: "Grant Officer" },
        { name: "TBC", role: "PAs / Special duty" },
        { name: "Ope Shoola", role: "Event Mgt" },
        { name: "TBC", role: "Foodbank" },
      ],
    },
    {
      name: "Training & Development",
      leads: [
        { name: "Babatunde Akanbi", role: "Training & Development" },
        { name: "Babatunde Akanbi", role: "Workers Training" },
        { name: "TBC", role: "School of Disciples" },
        { name: "TBC", role: "Bible College" },
        { name: "TBC", role: "Believers Class" },
        { name: "TBC", role: "Baptism Class" },
        { name: "TBC", role: "Workers Development" },
      ],
    },
    {
      name: "Children Division",
      leads: [
        { name: "Oyenike Disu", role: "Children Division" },
        { name: "Sis Nike", role: "Class 1" },
        { name: "Joseph Lawal", role: "Class 2" },
        { name: "TBC", role: "Class 3" },
      ],
    },
    {
      name: "Fellowship Division",
      leads: [
        { name: "TBC", role: "Fellowship Division" },
        { name: "Oyenike Disu", role: "Women President" },
        { name: "TBC", role: "Head of Elders" },
        { name: "TBC", role: "Children" },
        { name: "TBC", role: "Birthday Service" },
        { name: "Sunday Akinbumit Akinruli A -VP", role: "Men's President" },
        { name: "TBC", role: "Youth President" },
        { name: "TBC", role: "Teenagers" },
      ],
    },
    {
      name: "Digital & Media",
      leads: [
        { name: "Ebenzer Aladejobi", role: "Digital & Media" },
        { name: "Min Annie Cletus-D", role: "Director of Music" },
        { name: "Dr L Abayomi-DC Bukola Akinbumiti AD", role: "TBC" },
        { name: "Adebayo Fagbire", role: "Instrumentalists" },
        { name: "Sis Loveth Eze", role: "Social Media" },
        { name: "Victor Obanawu", role: "Publicity" },
        { name: "TBC", role: "Media" },
        { name: "Isaac Ayanfe", role: "Technical" },
      ],
    },
  ];

  const toggleDivision = (index) => {
    setExpandedDivision(expandedDivision === index ? null : index);
  };

  return (
    <Box w="100vw" maxW="4xl" mx="auto" p={4}>
      <Heading as="h1" size="2xl" my={10} textAlign="center" color="blue.800">
        Division Leads
      </Heading>
      <VStack spacing={4}>
        {divisions.map((division, index) => (
          <Box
            key={index}
            w="100%"
            border="1px solid black"
          >
            <Button
              onClick={() => toggleDivision(index)}
              w="100%"
              justifyContent="space-between"
              bg="white"
              _hover={{ bg: "gray.200" }}
              padding={6}
            >
              <Text color="black" fontWeight="bold" fontSize="lg">
                {division.name}
              </Text>
              {expandedDivision === index ? (
                <ChevronUp color="black" />
              ) : (
                <ChevronDown color="black" />
              )}
            </Button>
            {expandedDivision === index && division.leads.length > 0 && (
              <Box p={4} bg="white" borderTop="1px solid black">
                {division.leads.map((lead, leadIndex) => (
                  <Grid key={leadIndex} templateColumns="repeat(2, 1fr)" gap={4} mb={2}>
                    <GridItem>
                      <Text color="black" fontSize="md">{lead.name}</Text>
                    </GridItem>
                    <GridItem textAlign="right">
                      <Text fontSize="sm" color="gray.600">
                        {lead.role}
                      </Text>
                    </GridItem>
                  </Grid>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default DivisionLeads;