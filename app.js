
$(document).ready(function () {
    loadExerciseTracker();

    $('#nav-exercise').on('click', function () {
        loadExerciseTracker();
    });

    $('#nav-nutrition').on('click', function () {
        loadNutritionLog();
    });

    function loadExerciseTracker() {
        $('#root').empty();
        ReactDOM.render(<ExerciseTracker />, document.getElementById('root'));
    }

    function loadNutritionLog() {
        $('#root').empty();
        ReactDOM.render(<NutritionLog />, document.getElementById('root'));
    }
});
