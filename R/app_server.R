#' The application server-side
#'
#' @param input,output,session Internal parameters for {shiny}.
#'     DO NOT REMOVE.
#' @import shiny
#' @noRd
app_server <- function(input, output, session) {
	observeEvent(input$showbarplot, {
		app_labels <- sample(letters, 5)
		app_label <- paste0(sample(letters, 10), collapse = "")
		app_data <- sample(1:100, 5)
		app_borderWidth <- sample(1:5, 1)

		golem::invoke_js(
			"barchartJS",
			list(
				labels = app_labels,
				label = app_label,
				data = app_data,
				borderWidth = app_borderWidth
			)
		)
	})

	observeEvent(input$showscatterplot, {
		golem::invoke_js(
			"scatterplotJS",
			list(
				label = "My scatterplot",
				data = purrr::transpose(
					list(
						x = iris$Sepal.Length,
						y = iris$Sepal.Width
					)
				)
			)
		)
	})
}
