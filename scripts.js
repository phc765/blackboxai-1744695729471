// Answer key for exercises with detailed solutions
const exerciseData = {
    'answer1': {
        correct: 'A',
        solution: 'Với cấp số cộng có u₁ = 2 và d = 3, ta có:<br>' +
                 'u₅ = u₁ + 4d = 2 + 4(3) = 2 + 12 = 14'
    },
    'answer2': {
        correct: 'A',
        solution: 'Dân số sau n năm = 2 * (1.015)^10<br>' +
                 '= 2 * 1.16 ≈ 2.32 triệu người'
    },
    'answer3': {
        correct: 'A',
        solution: 'Giá trị ô tô sau 5 năm = 800 * (0.85)^5<br>' +
                 '= 800 * 0.44 ≈ 350.8 triệu đồng'
    },
    'answer4': {
        correct: 'C',
        solution: 'Số vi khuẩn sau 20 phút = 2^20<br>' +
                 '= 1,048,576 vi khuẩn'
    },
    'answer5': {
        correct: 'A',
        solution: 'Giá trị máy ủi sau 5 năm = 3 * (0.8)^5<br>' +
                 '= 3 * 0.33 ≈ 0.98 tỉ đồng'
    },
    'answer6': {
        correct: 'C',
        solution: 'Nhiệt độ sau 6 giờ = 20 * (0.8)^6<br>' +
                 '= 20 * 0.131 ≈ 2.62°C'
    },
    'answer7': {
        correct: 'D',
        solution: 'Tổng quãng đường = 100 * (1 - 0.8^10)/(1 - 0.8)<br>' +
                 '≈ 412.71m'
    },
    'answer8': {
        correct: 'B',
        solution: 'Tổng lương = 300 * (1.1^5 - 1)/(1.1 - 1)<br>' +
                 '≈ 1,830.2 triệu đồng'
    },
    'answer9': {
        correct: 'A',
        solution: 'Số tiền sau 10 năm = 100 * (1.08)^10<br>' +
                 '≈ 215.89 triệu đồng'
    },
    'answer10': {
        correct: 'C',
        solution: 'Diện tích tầng trên cùng = 400 * (0.5)^9<br>' +
                 '≈ 0.390625m²'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize exercise tracking
    let completedExercises = new Set();
    let totalExercises = Object.keys(exerciseData).length;
    
    // Update progress function
    function updateProgress() {
        const progressPercentage = (completedExercises.size / totalExercises) * 100;
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            bar.style.width = `${progressPercentage}%`;
        });
    }

    // Handle answer checking
    window.checkAnswer = function(answerId) {
        const selectedAnswer = document.querySelector(`input[name="${answerId}"]:checked`);
        const resultDiv = document.getElementById(`result-${answerId}`);
        const solutionDiv = document.getElementById(`solution-${answerId}`);
        
        if (!selectedAnswer) {
            resultDiv.innerHTML = '<p class="text-red-500 mt-2">Vui lòng chọn một đáp án!</p>';
            return;
        }

        // Add loading animation
        resultDiv.innerHTML = '<div class="loading-spinner mx-auto mt-4"></div>';

        // Simulate checking delay
        setTimeout(() => {
            const isCorrect = selectedAnswer.value === exerciseData[answerId].correct;
            
            if (isCorrect) {
                resultDiv.innerHTML = `
                    <div class="correct-answer mt-4 p-3 rounded-lg">
                        <p class="text-green-800"><i class="fas fa-check-circle mr-2"></i>Chính xác!</p>
                    </div>
                `;
                
                // Show detailed solution
                solutionDiv.innerHTML = `
                    <div class="mt-4 p-4 bg-blue-50 rounded-lg solution-explanation">
                        <h4 class="font-bold text-blue-800 mb-2">Giải thích:</h4>
                        <p class="text-gray-700">${exerciseData[answerId].solution}</p>
                    </div>
                `;

                // Mark exercise as completed
                completedExercises.add(answerId);
                updateProgress();

                // Add completion animation
                const exerciseCard = resultDiv.closest('.exercise');
                exerciseCard.classList.add('completed');
                
                // Animate solution appearance
                const solution = solutionDiv.querySelector('.solution-explanation');
                solution.style.opacity = '0';
                solution.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    solution.style.transition = 'all 0.5s ease';
                    solution.style.opacity = '1';
                    solution.style.transform = 'translateY(0)';
                }, 100);
            } else {
                resultDiv.innerHTML = `
                    <div class="wrong-answer mt-4 p-3 rounded-lg">
                        <p class="text-red-800"><i class="fas fa-times-circle mr-2"></i>Chưa chính xác. Hãy thử lại!</p>
                        <p class="text-gray-600 mt-2">Hãy xem lại bài giảng và thử lại.</p>
                    </div>
                `;
            }
        }, 1000);
    };

    // Add hover effects to exercise cards
    const exerciseCards = document.querySelectorAll('.exercise-card');
    exerciseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
            card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });

    // Add radio button animation
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            const label = radio.parentElement;
            label.style.transform = 'scale(1.05)';
            setTimeout(() => {
                label.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Initialize filters
    const filters = document.querySelectorAll('select');
    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            const exercises = document.querySelectorAll('.exercise');
            exercises.forEach(exercise => {
                exercise.style.opacity = '0';
                setTimeout(() => {
                    exercise.style.opacity = '1';
                }, 300);
            });
        });
    });

    // Initialize progress
    updateProgress();
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
