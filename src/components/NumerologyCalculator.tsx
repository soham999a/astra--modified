import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NumerologyCalculator = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState<null | {
    lifePathNumber: number;
    destinyNumber: number;
    personalityNumber: number;
    description: string;
  }>(null);

  const calculateLifePathNumber = (date: string): number => {
    if (!date) return 0;
    
    // Remove non-numeric characters
    const numericDate = date.replace(/\D/g, '');
    
    if (numericDate.length < 8) return 0;
    
    // Sum all digits
    let sum = 0;
    for (let i = 0; i < numericDate.length; i++) {
      sum += parseInt(numericDate[i]);
    }
    
    // Reduce to a single digit (except master numbers 11, 22)
    while (sum > 9 && sum !== 11 && sum !== 22) {
      let newSum = 0;
      sum.toString().split('').forEach(digit => {
        newSum += parseInt(digit);
      });
      sum = newSum;
    }
    
    return sum;
  };

  const calculateDestinyNumber = (fullName: string): number => {
    if (!fullName) return 0;
    
    const letterValues: {[key: string]: number} = {
      'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
      'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
      's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
    };
    
    // Convert name to lowercase and remove non-alphabetic characters
    const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
    
    // Sum letter values
    let sum = 0;
    for (let i = 0; i < cleanName.length; i++) {
      const letter = cleanName[i];
      if (letterValues[letter]) {
        sum += letterValues[letter];
      }
    }
    
    // Reduce to a single digit (except master numbers)
    while (sum > 9 && sum !== 11 && sum !== 22) {
      let newSum = 0;
      sum.toString().split('').forEach(digit => {
        newSum += parseInt(digit);
      });
      sum = newSum;
    }
    
    return sum;
  };

  const calculatePersonalityNumber = (fullName: string): number => {
    if (!fullName) return 0;
    
    const consonantValues: {[key: string]: number} = {
      'b': 2, 'c': 3, 'd': 4, 'f': 6, 'g': 7, 'h': 8, 'j': 1, 'k': 2, 'l': 3, 
      'm': 4, 'n': 5, 'p': 7, 'q': 8, 'r': 9, 's': 1, 't': 2, 'v': 4, 
      'w': 5, 'x': 6, 'y': 7, 'z': 8
    };
    
    // Convert name to lowercase and remove non-alphabetic characters
    const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
    
    // Sum consonant values
    let sum = 0;
    for (let i = 0; i < cleanName.length; i++) {
      const letter = cleanName[i];
      if (consonantValues[letter]) {
        sum += consonantValues[letter];
      }
    }
    
    // Reduce to a single digit (except master numbers)
    while (sum > 9 && sum !== 11 && sum !== 22) {
      let newSum = 0;
      sum.toString().split('').forEach(digit => {
        newSum += parseInt(digit);
      });
      sum = newSum;
    }
    
    return sum;
  };

  const getNumberDescription = (number: number): string => {
    const descriptions: {[key: number]: string} = {
      1: "Independent, leader, pioneering, ambitious, courageous",
      2: "Cooperative, diplomatic, sensitive, peacemaker, adaptable",
      3: "Creative, expressive, optimistic, social, communicative",
      4: "Practical, organized, reliable, hard-working, traditional",
      5: "Adventurous, versatile, freedom-loving, adaptable, curious",
      6: "Responsible, nurturing, supportive, compassionate, harmonious",
      7: "Analytical, introspective, perfectionist, spiritual, wise",
      8: "Ambitious, authoritative, successful, material-focused, powerful",
      9: "Humanitarian, compassionate, selfless, idealistic, creative",
      11: "Intuitive, inspirational, idealistic, visionary, sensitive",
      22: "Master builder, practical visionary, powerful, capable, idealistic"
    };
    
    return descriptions[number] || "Please enter valid information to calculate.";
  };

  const handleCalculate = () => {
    if (!name || !birthdate) {
      setResult(null);
      return;
    }
    
    const lifePathNumber = calculateLifePathNumber(birthdate);
    const destinyNumber = calculateDestinyNumber(name);
    const personalityNumber = calculatePersonalityNumber(name);
    
    setResult({
      lifePathNumber,
      destinyNumber,
      personalityNumber,
      description: getNumberDescription(lifePathNumber)
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <CardHeader className="bg-gradient-to-r from-dusty-lavender/30 to-celestial-blue/30 rounded-t-lg">
        <CardTitle className="flex items-center text-xl text-mystic-gold">
          <Calculator className="mr-2" size={20} />
          Numerology Calculator
        </CardTitle>
        <CardDescription>
          Discover your basic numerology numbers
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>
          <TabsContent value="calculator" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name (as on birth certificate)</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthdate">Date of Birth</Label>
              <Input
                id="birthdate"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <Button 
              className="w-full bg-mystic-gold hover:bg-mystic-gold/90 text-white"
              onClick={handleCalculate}
            >
              Calculate
            </Button>
          </TabsContent>
          <TabsContent value="results">
            {result ? (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-dusty-lavender/20 p-3 rounded-lg">
                    <p className="text-xs text-charcoal/70">Life Path</p>
                    <p className="text-2xl font-bold text-mystic-gold">{result.lifePathNumber}</p>
                  </div>
                  <div className="bg-celestial-blue/20 p-3 rounded-lg">
                    <p className="text-xs text-charcoal/70">Destiny</p>
                    <p className="text-2xl font-bold text-mystic-gold">{result.destinyNumber}</p>
                  </div>
                  <div className="bg-mystic-gold/10 p-3 rounded-lg">
                    <p className="text-xs text-charcoal/70">Personality</p>
                    <p className="text-2xl font-bold text-mystic-gold">{result.personalityNumber}</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-charcoal/80">Your Life Path Traits:</p>
                  <p className="text-sm font-medium">{result.description}</p>
                </div>
                <p className="text-xs text-center text-charcoal/60 mt-2">
                  This is a basic calculation. For a detailed analysis, please book a consultation.
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-charcoal/70">Enter your details and calculate to see results</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="bg-gray-50 rounded-b-lg">
        <Button variant="link" className="w-full text-mystic-gold" asChild>
          <a href="/numerology">Get Full Numerology Reading</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NumerologyCalculator;
