import random
RETRIES = 3
MIN_NUMBER = 0
MAX_NUMBER = 10

def game_loop():
    winning_number = random.randint(MIN_NUMBER, MAX_NUMBER)
    retries = RETRIES
    print 'Hi August! Let\'s play a game. I have picked a number. Now it\'s your turn!\n'
    while retries > 0:
        print 
        user_number = raw_input('You have %s guesses remaining. Pick a number between %s and %s. ' % (retries, MIN_NUMBER, MAX_NUMBER))
        try:
            user_number = int(user_number)
        except ValueError:
            print 'That\'s not a number!'
            continue

        if user_number == winning_number:
            print 'YOU GOT IT!!!!!!'
            smiley = ':) '
            for i in range(5):
                smiley += smiley
            print smiley
            retries = 0
        else:
            if user_number > winning_number:
                print 'Your guess is too high!'
            else:
                print 'Your guess is too low!'
            retries = retries - 1
            if retries == 0:
                print 'You lose! Winning number was %s.' % winning_number

if __name__ == '__main__':
    game_loop()
