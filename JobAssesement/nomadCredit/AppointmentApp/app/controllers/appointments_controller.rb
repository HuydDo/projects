class AppointmentsController < ApplicationController
 
  def create
  
  end

  private

  def appointment_params
    params.permit(:slot_id)
  end

end
