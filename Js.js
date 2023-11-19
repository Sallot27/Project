$(document).ready(function() {
    $('#eventForm').submit(function(e) {
        e.preventDefault();
        var title = $('#title').val();
        var time = $('#time').val();
        var location = $('#location').val();
        var description = $('#description').val();
        var image = $('#image')[0].files[0]; // Get the selected image file

        // Create a FileReader object to read the image file
        var reader = new FileReader();

        reader.onload = function(e) {
            var imageSrc = e.target.result;

            // Create event card with the image
            var eventCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${imageSrc}" class="card-img-top" alt="Event Image">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                            <p class="card-text"><small class="text-muted">${time} | ${location}</small></p>
                        </div>
                    </div>
                </div>
            `;

            // Append event card to container
            $('#eventCardContainer').append(eventCard);

            // Reset form fields
            $('#title').val('');
            $('#time').val('');
            $('#location').val('');
            $('#description').val('');
            $('#image').val('');
        };

        // Read the image file as a data URL
        reader.readAsDataURL(image);
    });
});